import * as s from '../../page/Signup.css';

type TimeBlockProps = {
  title: string;
  times: string[];
  selected: string;
  onSelect: (time: string) => void;
};

function TimeBlock({ title, times, selected, onSelect }: TimeBlockProps) {
  return (
    <div className={s.timeBlock}>
      <div className={s.timeTitle}>{title}</div>
      <div className={s.timeGrid}>
        {times.map((timeValue) => (
          <button
            key={timeValue}
            className={`${s.timeButton} ${selected === timeValue ? s.timeButtonActive : ''}`}
            onClick={() => onSelect(timeValue)}
          >
            {timeValue}
          </button>
        ))}
      </div>
    </div>
  );
}

export default TimeBlock;
