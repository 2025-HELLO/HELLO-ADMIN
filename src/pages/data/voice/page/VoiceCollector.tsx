import ProgressBar from '@common/components/progress/ProgressBar';
import { IcSound, IcInfo, IcRecord, IcStop, IcLeftarrow, IcRightarrow } from '@assets/svgs/index';
import { useEffect, useRef, useState } from 'react';

import * as s from './VoiceCollector.css';
import { useRecorder } from '../hooks/useRecorder';
import { useTimer } from '../hooks/useTimer';
import { useVisualizer } from '../hooks/useVisualizer';

import { useTTS } from '@/shared/hooks/useTTS';
import Button from '@/common/components/button/Button';
import { SENTENCES } from '@/shared/mocks/voice/sentences';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 80;

const VoiceCollector = () => {
  const { speak, speaking } = useTTS();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const { seconds, start: startTimer, stop: stopTimer, reset: resetTimer } = useTimer(500);
  const { start: startVisualizer, stop: stopVisualizer } = useVisualizer(canvasRef, {
    fftSize: 64,
    width: CANVAS_WIDTH,
    height: CANVAS_HEIGHT,
    barColor: '#f87171',
  });

  const {
    audioURL,
    isRecording,
    start: startRecord,
    pause: pauseRecord,
    stop: stopRecord,
    audioRef,
    mediaRecorderRef,
    streamRef,
  } = useRecorder({
    onStart: (stream) => {
      resetTimer();
      startTimer();
      startVisualizer(stream);
    },
    onStop: () => {
      stopTimer();
      stopVisualizer();
    },
  });

  const formatTime = (sec: number) => {
    const mm = Math.floor(sec / 60)
      .toString()
      .padStart(2, '0');
    const ss = Math.floor(sec % 60)
      .toString()
      .padStart(2, '0');
    return `${mm}:${ss}`;
  };

  useEffect(() => {
    const el = audioRef.current;
    if (!el) {
      return;
    }
    if (audioURL) {
      el.srcObject = null;
      el.src = audioURL;
      el.load();
    } else {
      el.removeAttribute('src');
      el.load();
    }
  }, [audioURL, audioRef]);

  const onRecord = async () => {
    try {
      if (isRecording) {
        return;
      }

      if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'paused') {
        await startRecord();
        startTimer();
        if (streamRef.current) {
          startVisualizer(streamRef.current);
        }
        return;
      }

      await startRecord();
    } catch (e) {
      console.error('녹음 시작 실패:', e);
    }
  };

  const onStop = () => {
    if (!isRecording) {
      return;
    }
    pauseRecord();
    stopTimer();
    stopVisualizer();
    try {
      if (mediaRecorderRef.current?.state === 'paused') {
        mediaRecorderRef.current.requestData();
      }
    } catch {
      // noop
    }
  };

  const onSubmit = async () => {
    try {
      await stopRecord();
      alert('녹음 완료!'); // ✅ 여기 추가
    } finally {
      stopTimer();
      stopVisualizer();
    }
  };

  const handlePlay = () => speak(SENTENCES[currentIndex].text);
  const handlePrev = () => setCurrentIndex((p) => Math.max(p - 1, 0));
  const handleNext = () => setCurrentIndex((p) => Math.min(p + 1, SENTENCES.length - 1));

  useEffect(() => {
    return () => {
      stopTimer();
      stopVisualizer();
    };
  }, [stopTimer, stopVisualizer]);

  return (
    <div className={s.container}>
      <ProgressBar total={SENTENCES.length} current={currentIndex + 1} />
      <div className={s.divider} aria-hidden />

      <header className={s.header}>
        <span className={s.sentenceNumber}>문장 {currentIndex + 1}</span>
        <button
          type="button"
          onClick={handlePlay}
          aria-label="문장을 소리 내어 읽기"
          className={s.ttsButton}
          disabled={speaking}
        >
          <IcSound className={s.icon} />
        </button>
      </header>

      <div className={s.exampleBox}>{SENTENCES[currentIndex].text}</div>

      <section className={s.infoSection}>
        <IcInfo className={s.infoIcon} />
        <span className={s.infoText}>자연스럽고 또박또박 읽어주세요</span>
      </section>

      <div className={s.divider} aria-hidden />

      <section className={s.recorderSection}>
        <div className={s.visualizerWrapper}>
          <canvas
            ref={canvasRef}
            className={s.visualizer}
            width={CANVAS_WIDTH}
            height={CANVAS_HEIGHT}
          />
          <div className={s.timer} aria-live="polite">
            {formatTime(seconds)}
          </div>
        </div>

        <button
          className={s.recordButton}
          aria-pressed={isRecording}
          onClick={isRecording ? onStop : onRecord}
        >
          {isRecording ? (
            <IcStop className={s.recordIcon} />
          ) : (
            <IcRecord className={s.recordIcon} />
          )}
        </button>

        <audio ref={audioRef} src={audioURL ?? undefined} controls preload="metadata" />

        <div className={s.actionButtons}>
          <Button variant="primary" label="녹음 완료" onClick={onSubmit} disabled={!audioURL} />
        </div>

        <div className={s.navButtons}>
          <Button
            variant="tertiary"
            size="small"
            icon={<IcLeftarrow />}
            label="이전"
            onClick={handlePrev}
          />
          <Button
            variant="secondary"
            size="small"
            icon={<IcRightarrow />}
            label="다음"
            iconPosition="right"
            onClick={handleNext}
          />
        </div>
      </section>
    </div>
  );
};

export default VoiceCollector;
