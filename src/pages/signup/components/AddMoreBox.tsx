import * as s from '../page/Signup.css';

interface Props {
  onClick: () => void;
}

const AddMoreBox = ({ onClick }: Props) => (
  <div className={s.addMoreWrapper}>
    <div
      className={s.addMoreBox}
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
      <span className={s.addMoreIcon}>＋</span>
      <span className={s.addMoreText}>추가 부모 정보 입력하기</span>
    </div>
  </div>
);

export default AddMoreBox;
