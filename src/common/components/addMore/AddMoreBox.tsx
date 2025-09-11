import * as s from './AddMoreBox.css';

interface Props {
  onClick: () => void;
  text?: string;
  className?: string;
}

const AddMoreBox = ({ onClick, text = '추가하기', className }: Props) => (
  <div className={[s.wrapper, className].filter(Boolean).join(' ')}>
    <div
      className={s.box}
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <span className={s.icon}>＋</span>
      <span className={s.text}>{text}</span>
    </div>
  </div>
);

export default AddMoreBox;
