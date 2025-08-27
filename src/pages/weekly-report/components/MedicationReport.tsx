import { useState } from 'react';

import * as s from '../page/WeeklyReportDetail.css';
import { MED_LIST, MED_RECORDS } from '../mocks/medication';

const WEEK_DAYS = ['월', '화', '수', '목', '금', '토', '일'] as const;

interface MedicationReportProps {
  weekDates: string[];
  medWeek: { day: string; taken: boolean }[];
}

const MedicationReport = ({ weekDates, medWeek }: MedicationReportProps) => {
  const [selectedMed, setSelectedMed] = useState<(typeof MED_LIST)[number]>(MED_LIST[0]);
  const medTable = MED_RECORDS[selectedMed];

  return (
    <>
      <h2 className={s.sectionTitleOutside} id="med-title">
        💊 약 복용 리포트
      </h2>
      <section className={s.section} aria-labelledby="med-title">
        <ul className={s.dotRow}>
          {medWeek.map((d, idx) => (
            <li key={WEEK_DAYS[idx]} className={s.dotItem}>
              <span className={s.dayLabel}>{WEEK_DAYS[idx]}</span>
              <span
                className={d.taken ? s.dotTaken : s.dotMissed}
                role="img"
                aria-label={d.taken ? '복용함' : '미복용'}
              />
              <time className={s.dateLabel}>{weekDates[idx]}</time>
            </li>
          ))}
        </ul>
      </section>

      <section className={s.medReportBox}>
        <div className={s.medReportHeader}>
          <h3 id="med-detail-title" className={s.medReportTitle}>
            약별 복약 현황
          </h3>
          <label className={s.medSelectLabel}>
            <span className={s.visuallyHidden}>약 선택</span>
            <select
              className={s.medSelect}
              value={selectedMed}
              onChange={(e) => setSelectedMed(e.target.value as (typeof MED_LIST)[number])}
              aria-label="약 선택"
            >
              {MED_LIST.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div
          className={s.medTableWrap}
          role="table"
          aria-label={`${selectedMed} 회차별·요일별 복약 현황`}
        >
          <div className={s.medTrHead} role="row">
            <span className={s.medThEmpty} aria-hidden="true">
              횟수
            </span>
            {weekDates.map((_, idx) => (
              <span key={idx} className={s.medTh} role="columnheader">
                {WEEK_DAYS[idx]}
              </span>
            ))}
          </div>
          {[0, 1, 2].map((doseIdx) => (
            <div key={doseIdx} className={s.medTr} role="row">
              <span className={s.medTd} role="rowheader">
                {doseIdx + 1}회
              </span>
              {medTable.week.map((row) => {
                const val = row.doses[doseIdx];
                const cls = val === 'O' ? s.medTdO : val === 'X' ? s.medTdX : s.medTd;
                return (
                  <span key={`${row.day}-${doseIdx}`} className={cls} role="cell">
                    {val}
                  </span>
                );
              })}
            </div>
          ))}
        </div>
      </section>
      <div className={s.medNote}>
        이번 주 약 복용, 정말 잘 하셨어요! 특히 저녁은 빠짐없이 챙기셨어요. 화요일 하루만 놓치신 게
        있어요. 혹시 그날 무슨 일 있으셨을까요?
      </div>
    </>
  );
};

export default MedicationReport;
