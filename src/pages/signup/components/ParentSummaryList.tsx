import * as s from '../page/Signup.css';
import type { Freq, Time } from './DoseSelector';

export interface ParentEntry {
  parentName: string;
  parentAge: string;
  drugName: string;
  freq: Freq;
  times: Time[];
}

interface Props {
  parents: ParentEntry[];
  onEdit: (index: number) => void;
  onRemove: (index: number) => void;
}

const ParentSummaryList = ({ parents, onEdit, onRemove }: Props) => {
  if (!parents || parents.length === 0) {
    return null;
  }

  return (
    <div className={s.parentSummaryList}>
      {parents.map((p, i) => (
        <div key={i} className={s.parentSummaryCard}>
          <div className={s.parentSummaryHeader}>
            <div className={s.parentSummaryTitle}>
              {p.parentName} • {p.parentAge}세
            </div>
            <div className={s.parentSummaryActions}>
              <button type="button" className={s.parentSummaryAction} onClick={() => onEdit(i)}>
                편집
              </button>
              <button type="button" className={s.parentSummaryAction} onClick={() => onRemove(i)}>
                삭제
              </button>
            </div>
          </div>
          <div className={s.parentSummaryRow}>약 이름: {p.drugName || '-'}</div>
          <div className={s.parentSummaryRow}>
            시간: 하루에 {p.freq}번 • {p.times.join(', ')}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParentSummaryList;
