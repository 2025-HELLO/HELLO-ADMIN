import * as s from '../../page/Signup.css';
import { DoseSelector, ParentSummaryList, ParentBasicFields, DrugFields, AddMoreBox } from '../sub';
import useParentForm from '../../hooks/useParentForm';

import Button from '@/common/components/button/Button';

interface Props {
  onNext: () => void;
}

const ParentInfoStep = ({ onNext }: Props) => {
  const {
    current,
    setCurrent,
    parents,
    addCurrentAsParent,
    editParent,
    removeParent,
    updateFreq,
    updateTimes,
    canProceed,
    goNext,
  } = useParentForm();

  const handleNext = () => goNext(onNext);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleNext();
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>부모 정보 입력</h1>
      <ParentSummaryList parents={parents} onEdit={editParent} onRemove={removeParent} />
      <form onSubmit={handleSubmit}>
        <ParentBasicFields
          parentName={current.parentName}
          parentAge={current.parentAge}
          onChangeName={(v: string) => setCurrent((p) => ({ ...p, parentName: v }))}
          onChangeAge={(v: string) => setCurrent((p) => ({ ...p, parentAge: v }))}
        />
        <DrugFields
          value={current.drugName}
          onChange={(v) => setCurrent((p) => ({ ...p, drugName: v }))}
        />
        <div className={s.inputGroup({ size: 'md' })}>
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
