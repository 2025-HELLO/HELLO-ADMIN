import { useId } from 'react';

import * as s from '../../page/Signup.css';

interface Props {
  value: string;
  onChange: (v: string) => void;
}

const DrugFields = ({ value, onChange }: Props) => {
  const inputId = useId();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <>
      <h2 className={s.subTitle}>복용하는 약 정보</h2>
      <div className={s.inputGroup({ size: 'md' })}>
        <label htmlFor={inputId} className={s.inputLabel}>
          약 이름
        </label>
        <input
          id={inputId}
          name="drugName"
          type="text"
          placeholder="약 이름을 입력하세요"
          className={s.input}
          value={value}
          onChange={handleChange}
          autoComplete="off"
        />
      </div>
    </>
  );
};

export default DrugFields;
