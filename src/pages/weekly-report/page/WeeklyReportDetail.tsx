import { useParams, useLocation } from 'react-router-dom';

import * as s from './WeeklyReportDetail.css';
import {
  MedicationReport,
  MealPatternReport,
  WakeTimeReport,
  ScheduleReport,
  ReminiscenceReport,
} from '../components';

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

      <MedicationReport weekDates={weekDates} />
      <MealPatternReport />
      <WakeTimeReport />
      <ScheduleReport />
      <ReminiscenceReport />
    </main>
  );
};

export default WeeklyReportDetail;
