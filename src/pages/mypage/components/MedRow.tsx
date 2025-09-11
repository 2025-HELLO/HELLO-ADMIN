import { useEffect, useState } from 'react';

import * as s from '../page/MyPage.css';

interface Props {
  med: { name: string };
  onRename: (name: string) => void;
  onRemove: () => void;
}

const MedRow = ({ med, onRename, onRemove }: Props) => {
  const [editing, setEditing] = useState(!med.name);
  const [value, setValue] = useState(med.name);

  useEffect(() => {
    setValue(med.name);
  }, [med.name]);

  const commit = () => {
    const next = value.trim();
    if (!next) {
      return;
    }
    onRename(next);
    setEditing(false);
  };

  return (
    <div className={s.medRow} role="listitem">
      {editing ? (
        <input
          className={s.medInput}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              commit();
            }
            if (e.key === 'Escape') {
              setEditing(false);
            }
          }}
          aria-label="약 이름 수정"
          autoFocus
        />
      ) : (
        <div className={s.medName}>{med.name}</div>
      )}
      <div className={s.medActions}>
        {editing ? (
          <button className={s.medBtn} onClick={commit} type="button">
            완료
          </button>
        ) : (
          <button className={s.medBtn} onClick={() => setEditing(true)} type="button">
            수정
          </button>
        )}
        <button className={s.medBtn} onClick={onRemove} type="button">
          삭제
        </button>
      </div>
    </div>
  );
};

export default MedRow;
