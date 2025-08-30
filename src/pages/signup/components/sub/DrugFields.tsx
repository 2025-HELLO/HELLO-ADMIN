import * as s from '../../page/Signup.css';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const DrugFields = ({ value, onChange }: Props) => (
  <>
    <h2 className={s.subTitle}>복용하는 약 정보</h2>
    <div className={s.inputGroup}>
      <label htmlFor="drugName" className={s.inputLabel}>
        약 이름
      </label>
      <input
        id="drugName"
        name="drugName"
        type="text"
        placeholder="약 이름을 입력하세요"
        className={s.input}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  </>
);

export default DrugFields;
