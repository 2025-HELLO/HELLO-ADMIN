import { useState } from 'react';

import * as s from '../../page/Signup.css';
import DoseSelector, { type Freq, type Time } from '../DoseSelector';
import ParentSummaryList, { type ParentEntry } from '../ParentSummaryList';
import ParentBasicFields from '../ParentBasicFields';
import DrugFields from '../DrugFields';
import AddMoreBox from '../AddMoreBox';
import { DEFAULT_TIME } from '../../constants/medication';

import Button from '@/common/components/button/Button';

interface Props {
  onNext: () => void;
}

const ParentInfoStep = ({ onNext }: Props) => {
  const [current, setCurrent] = useState<ParentEntry>({
    parentName: '',
    parentAge: '',
    drugName: '',
    freq: 1,
    times: [DEFAULT_TIME],
  });
  const [parents, setParents] = useState<ParentEntry[]>([]);

  const resetCurrent = () => {
    setCurrent({
      parentName: '',
      parentAge: '',
      drugName: '',
      freq: 1,
      times: [DEFAULT_TIME],
    });
  };

  const isComplete = (p: ParentEntry) =>
    !!p.parentName &&
    !!p.parentAge &&
    !!p.drugName &&
    p.times.length >= p.freq &&
    p.times.slice(0, p.freq).every(Boolean);

  const hasSavedComplete = parents.some(isComplete);
  const hasCurrentComplete = isComplete(current);
  const canProceed = hasSavedComplete || hasCurrentComplete;

  const handleNext = () => {
    if (canProceed) {
      onNext();
    } else {
      alert('부모 정보를 한 명 이상 완성해주세요.');
    }
  };

  const addCurrentAsParent = () => {
    const { parentName, parentAge, drugName, freq, times } = current;

    if (!parentName.trim() || !parentAge.trim()) {
      alert('성함과 나이를 입력해주세요.');
      return;
    }

    const entry: ParentEntry = {
      parentName: parentName.trim(),
      parentAge: parentAge.trim(),
      drugName: drugName.trim(),
      freq,
      times: times.slice(0, freq),
    };
    setParents((prev) => [...prev, entry]);
    resetCurrent();
  };

  const editParent = (idx: number) => {
    const entry = parents[idx];
    setCurrent({
      parentName: entry.parentName,
      parentAge: entry.parentAge,
      drugName: entry.drugName,
      freq: entry.freq,
      times: entry.times,
    });
    setParents((prev) => prev.filter((_, i) => i !== idx));
  };

  const removeParent = (idx: number) => {
    setParents((prev) => prev.filter((_, i) => i !== idx));
  };

  const updateFreq: React.Dispatch<React.SetStateAction<Freq>> = (next) =>
    setCurrent((prev) => {
      const nextFreq = typeof next === 'function' ? (next as (p: Freq) => Freq)(prev.freq) : next;
      const nextTimes = [...prev.times];
      while (nextTimes.length < nextFreq) {
        nextTimes.push(DEFAULT_TIME);
      }
      if (nextTimes.length > nextFreq) {
        nextTimes.length = nextFreq;
      }
      return { ...prev, freq: nextFreq, times: nextTimes };
    });

  const updateTimes: React.Dispatch<React.SetStateAction<Time[]>> = (value) =>
    setCurrent((prev) => ({
      ...prev,
      times: typeof value === 'function' ? (value as (p: Time[]) => Time[])(prev.times) : value,
    }));

  return (
    <section className={s.container}>
      <h1 className={s.title}>부모 정보 입력</h1>
      <ParentSummaryList parents={parents} onEdit={editParent} onRemove={removeParent} />
      <form>
        <ParentBasicFields
          parentName={current.parentName}
          parentAge={current.parentAge}
          onChangeName={(v: string) => setCurrent((p) => ({ ...p, parentName: v }))}
          onChangeAge={(v: string) => setCurrent((p) => ({ ...p, parentAge: v }))}
        />
        <h2 className={s.subTitle}>복용하는 약 정보</h2>
        <DrugFields
          value={current.drugName}
          onChange={(v) => setCurrent((p) => ({ ...p, drugName: v }))}
        />
        <div className={s.inputGroup}>
          <label className={s.inputLabel}>시간</label>
          <DoseSelector
            freq={current.freq}
            times={current.times}
            setFreq={updateFreq}
            setTimes={updateTimes}
          />
        </div>
        <AddMoreBox onClick={addCurrentAsParent} />
      </form>
      <div className={s.buttonContainer}>
        <Button variant="primary" label="다음" onClick={handleNext} disabled={!canProceed} />
      </div>
    </section>
  );
};

export default ParentInfoStep;
