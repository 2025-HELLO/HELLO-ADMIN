import * as s from '../page/WeeklyReportDetail.css';
import { WAKE_WEEK } from '../mocks/reportData';
import { DAYS } from '../constants/days';

import { colors } from '@/shared/styles/token';

const toHours = (t: string): number => {
  const [hh, mm] = t.split(':').map(Number);
  return hh + mm / 60;
};

const hoursLabel = (h: number): string => {
  return String(Math.floor(h));
};

const MIN_Y = 5;
const MAX_Y = 10;

const VB_W = 320;
const VB_H = 180;
const M = { top: 12, right: 14, bottom: 36, left: 35 };
const CH_W = VB_W - M.left - M.right;
const CH_H = VB_H - M.top - M.bottom;

const WakeTimeReport = () => {
  const values = WAKE_WEEK.week.map((d) => toHours(d.time));

  const xAt = (i: number) => M.left + (CH_W * i) / (values.length - 1);
  const yAt = (h: number) => {
    const t = (h - MIN_Y) / (MAX_Y - MIN_Y);
    const y = M.top + CH_H * (1 - t);
    return y;
  };

  const pathD = values
    .map((h, i) => `${i === 0 ? 'M' : 'L'} ${xAt(i).toFixed(2)} ${yAt(h).toFixed(2)}`)
    .join(' ');

  const gridYs = Array.from({ length: MAX_Y - MIN_Y + 1 }, (_, i) => MIN_Y + i);

  return (
    <>
      <h2 className={s.sectionTitleOutside} id="wake-title">
        ⏰ 기상 시간 리포트
      </h2>
      <section className={s.section} aria-labelledby="wake-title">
        <svg viewBox={`0 0 ${VB_W} ${VB_H}`} role="img" aria-label="주간 기상 시간 추이">
          <title>주간 기상 시간 추이</title>
          <rect x={0} y={0} width={VB_W} height={VB_H} fill="transparent" />

          {gridYs.map((h) => (
            <g key={h}>
              <line
                x1={M.left}
                x2={M.left + CH_W}
                y1={yAt(h)}
                y2={yAt(h)}
                stroke={colors.grey10}
                strokeWidth={1}
                opacity={h === 7 ? 0.6 : 0.35}
              />
              <text
                x={M.left - 10}
                y={yAt(h) + 4}
                fontSize={12}
                textAnchor="end"
                fill={colors.black01}
              >
                {hoursLabel(h)}
              </text>
            </g>
          ))}

          {WAKE_WEEK.week.map((_, i) => (
            <text
              key={i}
              x={xAt(i)}
              y={VB_H - 12}
              fontSize={12}
              textAnchor="middle"
              fill={colors.black01}
            >
              {DAYS[i]}
            </text>
          ))}

          <line
            x1={M.left}
            x2={M.left + CH_W}
            y1={VB_H - M.bottom}
            y2={VB_H - M.bottom}
            stroke={colors.black01}
            strokeWidth={2}
          />

          <path
            d={pathD}
            fill="none"
            stroke={colors.blue04}
            strokeWidth={4}
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity={0.9}
          />

          {values.map((h, i) => (
            <circle key={i} cx={xAt(i)} cy={yAt(h)} r={3.5} fill={colors.blue04} />
          ))}
        </svg>
      </section>
      <div className={s.medNote}>{WAKE_WEEK.note}</div>
    </>
  );
};

export default WakeTimeReport;
