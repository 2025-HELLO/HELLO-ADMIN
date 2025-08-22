import * as s from './ProgressBar.css';

interface Props {
  total: number;
  current: number;
}

const ProgressBar = ({ total, current }: Props) => {
  const percentage = Math.min(100, Math.max(0, (current / total) * 100));

  return (
    <div className={s.container} role="progressbar" aria-label="진행률">
      <div className={s.header}>
        <span>진행률</span>
        <span className={s.count}>
          {current}/{total}
        </span>
      </div>
      <div className={s.track}>
        <div className={s.bar} style={{ width: `${percentage}%` }} />
      </div>
      <div className={s.remainText}>{total - current}개의 문장이 남았습니다</div>
    </div>
  );
};

export default ProgressBar;
