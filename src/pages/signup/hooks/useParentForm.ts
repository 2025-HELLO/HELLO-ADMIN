import { useCallback, useState } from 'react';

import { DEFAULT_TIME } from '../constants/medication';
import { type Freq, type Time, type ParentEntry } from '../types';
import { isParentComplete } from '../utils/parent';

const initialParent: ParentEntry = {
  parentName: '',
  parentAge: '',
  drugName: '',
  freq: 1,
  times: [DEFAULT_TIME],
};

const useParentForm = () => {
  const [current, setCurrent] = useState<ParentEntry>(initialParent);

  const [parents, setParents] = useState<ParentEntry[]>([]);

  const resetCurrent = useCallback(() => {
    setCurrent(initialParent);
  }, []);

  const addCurrentAsParent = useCallback(() => {
    const { parentName, parentAge, drugName, freq, times } = current;
    const trimmed = {
      parentName: parentName.trim(),
      parentAge: parentAge.trim(),
      drugName: drugName.trim(),
    };
    if (!trimmed.parentName || !trimmed.parentAge || !trimmed.drugName) {
      alert('성함, 나이, 복용 약 이름을 모두 입력해주세요.');
      return;
    }
    const entry: ParentEntry = {
      ...trimmed,
      freq,
      times: times.slice(0, freq),
    };
    setParents((prev) => [...prev, entry]);
    resetCurrent();
  }, [current, resetCurrent]);

  const editParent = useCallback(
    (idx: number) => {
      const entry = parents[idx];
      if (!entry) {
        return;
      }
      setCurrent({ ...entry });
      setParents((prev) => prev.filter((_, i) => i !== idx));
    },
    [parents],
  );

  const removeParent = useCallback((idx: number) => {
    setParents((prev) => prev.filter((_, i) => i !== idx));
  }, []);

  const updateFreq = useCallback<React.Dispatch<React.SetStateAction<Freq>>>((next) => {
    setCurrent((prev) => {
      const nextFreq = typeof next === 'function' ? (next as (p: Freq) => Freq)(prev.freq) : next;
      const nextTimes = [...prev.times, ...Array(nextFreq).fill(DEFAULT_TIME)].slice(0, nextFreq);
      return { ...prev, freq: nextFreq, times: nextTimes };
    });
  }, []);

  const updateTimes = useCallback<React.Dispatch<React.SetStateAction<Time[]>>>((value) => {
    setCurrent((prev) => ({
      ...prev,
      times: typeof value === 'function' ? (value as (p: Time[]) => Time[])(prev.times) : value,
    }));
  }, []);

  const hasSavedComplete = parents.some(isParentComplete);
  const hasCurrentComplete = isParentComplete(current);
  const canProceed = hasSavedComplete || hasCurrentComplete;

  const goNext = useCallback(
    (cb: () => void) => {
      if (canProceed) {
        cb();
      } else {
        alert('부모 정보를 한 명 이상 완성해주세요.');
      }
    },
    [canProceed],
  );

  return {
    current,
    setCurrent,
    parents,
    setParents,

    resetCurrent,
    addCurrentAsParent,
    editParent,
    removeParent,

    updateFreq,
    updateTimes,

    canProceed,
    goNext,
  };
};

export default useParentForm;
