import ProgressBar from '@common/components/progress/ProgressBar';
import { IcSound, IcInfo } from '@assets/svgs/index';

import * as s from './VoiceCollector.css';

import { useTTS } from '@/shared/hooks/useTTS';

const TOTAL_SENTENCES = 100;
const CURRENT_INDEX = 24;
const EXAMPLE_SENTENCE = '안녕하세요. 오늘 하루는 어떻게 보내셨나요? 무엇을 도와드릴까요?';

const VoiceCollector = () => {
  const { speak, speaking } = useTTS();

  const handlePlay = () => {
    speak(EXAMPLE_SENTENCE);
  };

  return (
    <div className={s.root}>
      <ProgressBar total={TOTAL_SENTENCES} current={CURRENT_INDEX} />

      <div className={s.divider} aria-hidden />

      <header className={s.header}>
        <span className={s.sentenceNumber}>문장 {CURRENT_INDEX}</span>
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

      <div className={s.exampleBox}>{EXAMPLE_SENTENCE}</div>

      <section className={s.infoSection}>
        <IcInfo className={s.infoIcon} />
        <span className={s.infoText}>자연스럽고 또박또박 읽어주세요</span>
      </section>
      <div className={s.divider} aria-hidden />
    </div>
  );
};

export default VoiceCollector;
