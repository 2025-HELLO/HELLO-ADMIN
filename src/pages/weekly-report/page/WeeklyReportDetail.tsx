import { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';

import * as s from './WeeklyReportDetail.css';
import { MED_LIST, MED_RECORDS } from '../mocks/medication';

const WEEK_DAYS = ['월', '화', '수', '목', '금', '토', '일'] as const;

interface DetailState {
  range?: string;
}

const getMonday = (d: Date) => {
  const date = new Date(d);
  const dayOfWeek = (date.getDay() + 6) % 7;
  date.setDate(date.getDate() - dayOfWeek);
  return date;
};

const getWeekDates = (base: Date) => {
  const monday = getMonday(base);
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    const dd = String(d.getDate()).padStart(2, '0');
    return dd;
  });
};

const WeeklyReportDetail = () => {
  const { id } = useParams<'id'>();
  const { state } = useLocation() as { state?: DetailState };
  const range = state?.range;

  const weekDates = getWeekDates(new Date());

  const [selectedMed, setSelectedMed] = useState<(typeof MED_LIST)[number]>(MED_LIST[0]);
  const medTable = MED_RECORDS[selectedMed];

  const medWeek = [
    { day: '월', taken: true },
    { day: '화', taken: true },
    { day: '수', taken: false },
    { day: '목', taken: true },
    { day: '금', taken: true },
    { day: '토', taken: false },
    { day: '일', taken: true },
  ];

  const summaryItems = [
    { label: '복약', percent: 90, className: s.summaryMiniBoxMedication },
    { label: '식사', percent: 90, className: s.summaryMiniBoxMeal },
    { label: '일정', percent: 90, className: s.summaryMiniBoxSchedule },
  ];

  return (
    <main className={s.container}>
      <header className={s.title}>
        <h1>
          {id}주차 {range && `(${range})`}
        </h1>
      </header>

      <section className={s.summaryBox} aria-labelledby="summary-title">
        <h2 id="summary-title" className={s.summaryTitle}>
          홍길동님 주간활동요약
        </h2>
        <ul className={s.summaryRow}>
          {summaryItems.map((item) => (
            <li key={item.label} className={`${s.summaryMiniBox} ${item.className}`}>
              <p className={s.summaryText}>
                <span>{item.label}</span> <span>{item.percent}%</span>
              </p>
            </li>
          ))}
        </ul>
      </section>

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
    </main>
  );
};

export default WeeklyReportDetail;
