import ProgressBar from '@common/components/progress/ProgressBar';
import { IcSound, IcInfo, IcRecord, IcStop, IcLeftarrow, IcRightarrow } from '@assets/svgs/index';
import { useRef, useState, useEffect } from 'react';

import * as s from './VoiceCollector.css';

import { useTTS } from '@/shared/hooks/useTTS';
import Button from '@/common/components/button/Button';
import { SENTENCES } from '@/shared/mocks/voice/sentences';

const CANVAS_WIDTH = 600;
const CANVAS_HEIGHT = 80;
const ANALYSER_FFT_SIZE = 64;
const RECORDER_TIMESLICE_MS = 250;
const REC_MIME = MediaRecorder.isTypeSupported('audio/webm;codecs=opus')
  ? 'audio/webm;codecs=opus'
  : 'audio/webm';

const VoiceCollector = () => {
  const { speak, speaking } = useTTS();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const [audioURL, setAudioURL] = useState<string | null>(null);
  const [isRecording, setIsRecording] = useState(false);
  const audioChunks = useRef<Blob[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [recordTime, setRecordTime] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const lastStartRef = useRef<number | null>(null);
  const accumulatedMsRef = useRef<number>(0);

  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);
  const analyserRef = useRef<AnalyserNode | null>(null);
  const dataArrayRef = useRef<Uint8Array | null>(null);
  const animationRef = useRef<number | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const [currentIndex, setCurrentIndex] = useState(0);

  const formatTime = (seconds: number) => {
    const min = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');
    const sec = (seconds % 60).toString().padStart(2, '0');
    return `${min}:${sec}`;
  };

  const startVisualizer = (stream: MediaStream) => {
    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    const source = audioCtx.createMediaStreamSource(stream);
    source.connect(analyser);
    analyser.fftSize = ANALYSER_FFT_SIZE;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyserRef.current = analyser;
    dataArrayRef.current = dataArray;
    setAudioContext(audioCtx);

    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');

    if (canvas) {
      canvas.width = CANVAS_WIDTH;
      canvas.height = CANVAS_HEIGHT;
    }

    const draw = () => {
      if (!ctx || !analyserRef.current || !dataArrayRef.current || !canvas) {
        return;
      }

      animationRef.current = requestAnimationFrame(draw);
      analyserRef.current.getByteFrequencyData(dataArrayRef.current);

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const barWidth = (canvas.width / bufferLength) * 1.5;
      let x = 0;

      for (let i = 0; i < bufferLength; i++) {
        const barHeight = dataArrayRef.current[i] / 2;
        ctx.fillStyle = '#f87171';
        ctx.fillRect(x, canvas.height - barHeight, barWidth, barHeight);
        x += barWidth + 1;
      }
    };

    draw();
  };

  const stopVisualizer = () => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
    if (audioContext) {
      audioContext.close();
      setAudioContext(null);
    }
  };

  const startTimer = () => {
    lastStartRef.current = Date.now();

    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    timerRef.current = setInterval(() => {
      const runningMs = lastStartRef.current ? Date.now() - lastStartRef.current : 0;
      const totalMs = accumulatedMsRef.current + runningMs;
      setRecordTime(Math.floor(totalMs / 1000));
    }, 500);
  };

  const stopTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
    if (lastStartRef.current) {
      accumulatedMsRef.current += Date.now() - lastStartRef.current;
      lastStartRef.current = null;
    }
  };

  const onRecord = async () => {
    try {
      const r = mediaRecorderRef.current;
      if (r && r.state === 'recording') {
        return;
      }

      if (!mediaRecorderRef.current || mediaRecorderRef.current.state === 'inactive') {
        if (audioURL) {
          URL.revokeObjectURL(audioURL);
          setAudioURL(null);
        }

        audioChunks.current = [];
        accumulatedMsRef.current = 0;
        lastStartRef.current = null;
        setRecordTime(0);

        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        streamRef.current = stream;

        const recorder = new MediaRecorder(stream, { mimeType: REC_MIME });

        recorder.ondataavailable = (event) => {
          if (event.data && event.data.size > 0) {
            audioChunks.current.push(event.data);
          }
        };

        recorder.onstop = () => {
          const finalBlob = new Blob(audioChunks.current, { type: REC_MIME });
          const url = URL.createObjectURL(finalBlob);

          setAudioURL(url);
          if (audioRef.current) {
            audioRef.current.srcObject = null;
            audioRef.current.src = url;
          }

          if (streamRef.current) {
            streamRef.current.getTracks().forEach((track) => track.stop());
            streamRef.current = null;
          }
        };

        mediaRecorderRef.current = recorder;
        recorder.start(RECORDER_TIMESLICE_MS);

        setIsRecording(true);

        startTimer();
        startVisualizer(stream);
        return;
      }

      if (mediaRecorderRef.current.state === 'paused') {
        mediaRecorderRef.current.resume();
        setIsRecording(true);

        startTimer();
        if (streamRef.current) {
          startVisualizer(streamRef.current);
        }
        return;
      }
    } catch (error) {
      console.error('녹음 시작 실패:', error);
    }
  };

  const onStop = () => {
    const recorder = mediaRecorderRef.current;
    if (recorder && isRecording) {
      recorder.pause();
      setIsRecording(false);

      stopTimer();
      stopVisualizer();

      try {
        recorder.requestData();
      } catch (err) {
        console.error(err);
      }
      const previewBlob = new Blob(audioChunks.current, { type: REC_MIME });
      const url = URL.createObjectURL(previewBlob);
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
      setAudioURL(url);
      if (audioRef.current) {
        audioRef.current.srcObject = null;
        audioRef.current.src = url;
      }
    }
  };

  const onSubmit = () => {
    const recorder = mediaRecorderRef.current;
    if (recorder && recorder.state !== 'inactive') {
      recorder.stop();
      setIsRecording(false);
      stopTimer();
      stopVisualizer();
    }
  };

  const handlePlay = () => {
    speak(SENTENCES[currentIndex].text);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, SENTENCES.length - 1));
  };

  useEffect(() => {
    return () => {
      if (audioURL) {
        URL.revokeObjectURL(audioURL);
      }
      stopTimer();
      stopVisualizer();
      if (streamRef.current) {
        streamRef.current.getTracks().forEach((track) => track.stop());
      }
    };
  }, [audioURL]);

  return (
    <div className={s.container}>
      <ProgressBar total={SENTENCES.length} current={currentIndex + 1} />
      <div className={s.divider} aria-hidden />

      <header className={s.header}>
        <span className={s.sentenceNumber}>문장 {currentIndex + 1}</span>{' '}
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
          <canvas ref={canvasRef} className={s.visualizer} width={600} height={80} />
          <div className={s.timer} aria-live="polite">
            {formatTime(recordTime)}
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

        <audio ref={audioRef} src={audioURL ?? undefined} controls />

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
