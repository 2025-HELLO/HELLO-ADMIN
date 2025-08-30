import * as s from '../page/Signup.css';

interface Props {
  parentName: string;
  parentAge: string;
  onChangeName: (v: string) => void;
  onChangeAge: (v: string) => void;
}

const ParentBasicFields = ({ parentName, parentAge, onChangeName, onChangeAge }: Props) => {
  return (
    <>
      <div className={s.inputGroup}>
        <label htmlFor="parentName" className={s.inputLabel}>
          성함<span className={s.requiredMark}>*</span>
        </label>
        <input
          type="text"
          id="parentName"
          placeholder="성함을 입력하세요"
          className={s.input}
          name="parentName"
          autoComplete="username"
          required
          value={parentName}
          onChange={(e) => onChangeName(e.target.value)}
        />
      </div>

      <div className={s.inputGroup}>
        <label htmlFor="parentAge" className={s.inputLabel}>
          나이<span className={s.requiredMark}>*</span>
        </label>
        <input
          type="number"
          id="parentAge"
          placeholder="나이를 입력하세요"
          className={s.input}
          name="parentAge"
          required
          value={parentAge}
          onChange={(e) => onChangeAge(e.target.value)}
        />
      </div>
    </>
  );
};

export default ParentBasicFields;
