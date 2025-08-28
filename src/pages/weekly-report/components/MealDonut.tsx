import * as s from '../page/WeeklyReportDetail.css';

interface MealDonutProps {
  label: string;
  ok: number;
}

const R = 34;
const C = 2 * Math.PI * R;

const arcDash = (percent: number) => {
  const p = Math.max(0, Math.min(100, percent));
  const filled = (p / 100) * C;
  return `${filled} ${C - filled}`;
};

const MealDonut = ({ label, ok }: MealDonutProps) => {
  const no = 100 - ok;
  return (
    <div className={s.donutBox} aria-label={`${label} 섭취 비율`}>
      <svg width={88} height={88} viewBox="0 0 88 88" role="img">
        <g transform="rotate(-90 44 44)">
          <circle cx={44} cy={44} r={R} fill="none" stroke="#E6E8EC" strokeWidth={10} />
          <circle
            cx={44}
            cy={44}
            r={R}
            fill="none"
            stroke="#7AD7A0"
            strokeWidth={10}
            strokeDasharray={arcDash(ok)}
            strokeLinecap="butt"
          />
          <circle
            cx={44}
            cy={44}
            r={R}
            fill="none"
            stroke="#FFA7B3"
            strokeWidth={10}
            strokeDasharray={arcDash(no)}
            strokeDashoffset={(ok / 100) * C * -1}
            strokeLinecap="butt"
          />
        </g>
      </svg>
      <div className={s.donutCenter}>{label}</div>
      <div className={s.donutPercent} style={{ top: 14, left: 24 }}>
        {ok}%
      </div>
      <div className={s.donutPercent} style={{ bottom: 14, right: 20 }}>
        {no}%
      </div>
    </div>
  );
};

export default MealDonut;
