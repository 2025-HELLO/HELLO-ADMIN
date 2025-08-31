import * as s from '../../page/Signup.css';

import type { TimeOption } from '@/shared/constants/times';

type TimeBlockProps = {
  title: string;
  times: TimeOption[];
  selected: string | null;
  onSelect: (value: string | null) => void;
};

const TimeBlock = ({ title, times, selected, onSelect }: TimeBlockProps) => {
  return (
    <div className={s.timeBlock}>
      <div className={s.timeTitle}>{title}</div>
      <div className={s.timeGrid}>
        {times.map(({ value, label }) => (
          <button
            type="button"
            key={value ?? 'none'}
            className={`${s.timeButton} ${selected === value ? s.timeButtonActive : ''}`}
            onClick={() => onSelect(value)}
            aria-pressed={selected === value}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeBlock;
