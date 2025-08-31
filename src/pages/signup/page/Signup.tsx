type TimeValue = string;

interface TimeOption {
  label: string;
  value: TimeValue;
}

interface TimeBlockProps {
  title: string;
  times: TimeOption[];
  selected: TimeValue;
  onSelect: (value: TimeValue) => void;
}

const TimeBlock = ({ title, times, selected, onSelect }: TimeBlockProps) => {
  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {times.map((time) => (
          <li
            key={time.value}
            style={{ fontWeight: time.value === selected ? 'bold' : 'normal' }}
            onClick={() => onSelect(time.value)}
          >
            {time.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeBlock;
