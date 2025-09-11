import * as s from '../page/MyPage.css';

import DoseSelector, { type Freq, type Time } from '@/common/components/doseSelector/DoseSelector';

interface Props {
  title: string;
  freq: Freq;
  times: Time[];
  setFreq: (v: Freq | ((p: Freq) => Freq)) => void;
  setTimes: (v: Time[] | ((p: Time[]) => Time[])) => void;
}

const MedDoseEditor = ({ title, freq, times, setFreq, setTimes }: Props) => {
  return (
    <div>
      <div className={s.medDoseTitle}>{title}</div>
      <DoseSelector freq={freq} times={times} setFreq={setFreq} setTimes={setTimes} />
    </div>
  );
};

export default MedDoseEditor;
