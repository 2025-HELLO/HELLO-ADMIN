import { useParams, useLocation } from 'react-router-dom';
import screen1 from '@assets/images/screen1.png';
import screen2 from '@assets/images/screen2.png';
import screen3 from '@assets/images/screen3.png';
import screen4 from '@assets/images/screen4.png';
import screen5 from '@assets/images/screen5.png';
import screen6 from '@assets/images/screen6.png';

import * as s from './WeeklyReportDetail.css';

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
      <section className={s.screensSection} aria-label="screenshots">
        {[screen1, screen2, screen3, screen4, screen5, screen6].map((src, i) => (
          <div key={i} className={s.screenItem}>
            <img src={src} alt={`스크린샷 ${i + 1}`} className={s.screenImage} />
          </div>
        ))}
      </section>
    </main>
  );
};

export default WeeklyReportDetail;
