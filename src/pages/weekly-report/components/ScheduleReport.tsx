import { useState } from 'react';

import * as s from '../page/WeeklyReportDetail.css';
import { SCHEDULE_SUMMARY } from '../mocks/reportData';

import { IcUparrow } from '@/assets/svgs';

const ScheduleReport = () => {
  const [open, setOpen] = useState(true);

  return (
    <>
      <h2 className={s.sectionTitleOutside} id="schedule-title">
        🗓 일정 수행 리포트
      </h2>
      <section className={s.section} aria-labelledby="schedule-title">
        <div className={s.statRow}>
          <div className={s.statCard} aria-label={`총 일정 ${SCHEDULE_SUMMARY.total}건`}>
            <div className={s.statLabel}>총 일정</div>
            <div className={s.statValue}>{SCHEDULE_SUMMARY.total}건</div>
          </div>
          <div className={s.statCard} aria-label={`완료한 일정 ${SCHEDULE_SUMMARY.done}건`}>
            <div className={s.statLabel}>완료한 일정</div>
            <div className={s.statValue}>{SCHEDULE_SUMMARY.done}건</div>
          </div>
          <div className={s.statCard} aria-label={`수행률 ${SCHEDULE_SUMMARY.rate}%`}>
            <div className={s.statLabel}>수행률</div>
            <div className={s.statValue}>{SCHEDULE_SUMMARY.rate}%</div>
          </div>
        </div>

        <div className={s.completedBox}>
          <div className={s.completedHeader}>
            <span>완료한 일정</span>
            <button
              type="button"
              className={s.chevronBtn}
              aria-expanded={open}
              aria-controls="completed-list"
              onClick={() => setOpen((v) => !v)}
              title={open ? '접기' : '펼치기'}
            >
              <IcUparrow
                style={{
                  transform: open ? 'rotate(0deg)' : 'rotate(180deg)',
                  transition: 'transform 0.2s',
                }}
              />
            </button>
          </div>

          {open && (
            <ul id="completed-list" className={s.completedList}>
              {SCHEDULE_SUMMARY.completed.map((it, idx) => (
                <li key={`${it.date}-${idx}`} className={s.completedItem}>
                  <span role="img" aria-label="완료됨">
                    ✅
                  </span>
                  <span>
                    {it.date} {it.time} {it.title}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>

      <div className={s.medNote}>{SCHEDULE_SUMMARY.note}</div>
    </>
  );
};

export default ScheduleReport;
