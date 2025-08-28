import { useEffect, useState } from 'react';

import * as s from '../page/WeeklyReportDetail.css';
import { REMINISCENCE_SUMMARY } from '../mocks/reportData';

const ReminiscenceReport = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const openModal = (id: string) => setOpenId(id);
  const closeModal = () => setOpenId(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const active = REMINISCENCE_SUMMARY.items.find((it) => it.id === openId) || null;

  return (
    <>
      <h2 className={s.sectionTitleOutside} id="reminiscence-title">
        🎞️ 회상 리포트
      </h2>
      <div className={s.medNote}>
        이번 주 부모님의 기억 속 이야기 {REMINISCENCE_SUMMARY.items.length}편이 도착했어요.
      </div>

      <div className={s.reminList}>
        {REMINISCENCE_SUMMARY.items.map((it) => (
          <article
            key={it.id}
            className={s.reminCard}
            onClick={() => openModal(it.id)}
            role="button"
            aria-label={`${it.date} 회상 이야기 열기`}
          >
            <div className={s.reminDate}>📅 {it.date}</div>
            <div className={s.reminQuote}>{it.preview}</div>
            <div className={s.moreLink} aria-hidden>
              자세히 보기 →
            </div>
          </article>
        ))}
      </div>

      {active && (
        <div
          className={s.modalOverlay}
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="remin-modal-title"
        >
          <div className={s.modalPanel} onClick={(e) => e.stopPropagation()}>
            <div id="remin-modal-title" className={s.modalHeader}>
              📆 2025년 {active.date}
            </div>
            <div className={s.quoteBlock}>{active.content}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReminiscenceReport;
