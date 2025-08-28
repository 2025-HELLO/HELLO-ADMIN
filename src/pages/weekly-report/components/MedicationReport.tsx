import { useState } from 'react';

import * as s from '../page/WeeklyReportDetail.css';
import { MEDICATION_REPORT } from '../mocks/reportData';

interface MedicationReportProps {
  weekDates?: string[];
  medWeek?: { day: string; taken: boolean }[];
}

const MedicationReport = (props: MedicationReportProps) => {
  const data = MEDICATION_REPORT;
  const weekDatesArr = props.weekDates ?? data.weekDates;
  const takenWeek = props.medWeek ?? data.takenWeek;
  const [selectedMed, setSelectedMed] = useState<(typeof data.medList)[number]>(data.medList[0]);
  const medTable = data.records[selectedMed];

  return (
    <>
      <h2 className={s.sectionTitleOutside} id="med-title">
        💊 약 복용 리포트
      </h2>
      <section className={s.section} aria-labelledby="med-title">
        <ul className={s.dotRow}>
          {takenWeek.map((d, idx) => (
            <li key={idx} className={s.dotItem}>
              <span className={s.dayLabel}>{d.day}</span>
              <span
                className={d.taken ? s.dotTaken : s.dotMissed}
                role="img"
                aria-label={d.taken ? '복용함' : '미복용'}
              />
              <time className={s.dateLabel}>{weekDatesArr[idx]}</time>
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
              onChange={(e) => setSelectedMed(e.target.value as (typeof data.medList)[number])}
              aria-label="약 선택"
            >
              {data.medList.map((m) => (
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
            {weekDatesArr.map((_, idx) => (
              <span key={idx} className={s.medTh} role="columnheader">
                {takenWeek[idx].day}
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
                const cls = val === 'O' ? s.medTdO : s.medTdX;
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
      <div className={s.medNote}>{data.note}</div>
    </>
  );
};

export default MedicationReport;
