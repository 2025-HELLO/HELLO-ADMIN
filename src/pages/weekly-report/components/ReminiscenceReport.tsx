import { useOverlay } from '@toss/use-overlay';

import * as s from '../page/WeeklyReportDetail.css';
import { REMINISCENCE_SUMMARY } from '../mocks/reportData';
import ReminiscenceDialog, { type ReminItem } from './ReminiscenceDialog';

const ReminiscenceReport = () => {
  const overlay = useOverlay();

  const openDialog = (item: ReminItem) => {
    overlay.open(({ isOpen, close }) => (
      <ReminiscenceDialog
        open={isOpen}
        item={item}
        onClose={() => {
          close();
        }}
      />
    ));
  };

  return (
    <>
      <h2 className={s.sectionTitleOutside} id="reminiscence-title">
        🎞️ 회상 리포트
      </h2>
      <div className={s.medNote}>
        이번 주 부모님의 기억 속 이야기 {REMINISCENCE_SUMMARY.items.length}편이 도착했어요.
      </div>

      <div className={s.reminList}>
        {REMINISCENCE_SUMMARY.items.map((i: ReminItem) => (
          <article
            key={i.id}
            className={s.reminCard}
            onClick={() => openDialog(i)}
            role="button"
            aria-label={`${i.date} 회상 이야기 열기`}
          >
            <div className={s.reminDate}>📅 {i.date}</div>
            <div className={s.reminQuote}>{i.preview}</div>
            <div className={s.moreLink} aria-hidden>
              자세히 보기 →
            </div>
          </article>
        ))}
      </div>
    </>
  );
};

export default ReminiscenceReport;
