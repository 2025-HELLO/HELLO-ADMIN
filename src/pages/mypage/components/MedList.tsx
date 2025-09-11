import MedRow from './MedRow';
import * as s from '../page/MyPage.css';

import type { Freq, Time } from '@/common/components/doseSelector/DoseSelector';

interface Med {
  name: string;
  freq: Freq;
  times: Time[];
}

interface Props {
  meds: Med[];
  onRename: (idx: number, name: string) => void;
  onRemove: (idx: number) => void;
}

const MedList = ({ meds, onRename, onRemove }: Props) => {
  return (
    <div className={s.medListBox} role="list" aria-label="복용 약 목록">
      {meds.map((med, idx) => (
        <MedRow
          key={`${med.name}-${idx}`}
          med={med}
          onRename={(name) => onRename(idx, name)}
          onRemove={() => onRemove(idx)}
        />
      ))}
    </div>
  );
};

export default MedList;
