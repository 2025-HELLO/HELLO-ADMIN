import { useState } from 'react';

import * as s from '../../page/Signup.css';

import Button from '@/common/components/button/Button';

interface Props {
  onNext: () => void;
}

const TERMS = [
  { id: 'service', label: '서비스 이용약관(필수)', required: true },
  { id: 'privacy', label: '개인정보 처리방침(필수)', required: true },
  { id: 'marketing', label: '마케팅 정보 수신 동의(선택)', required: false },
] as const;

type TermId = (typeof TERMS)[number]['id'];

const REQUIRED_IDS: ReadonlyArray<TermId> = TERMS.filter((t) => t.required).map((t) => t.id);
const EMPTY_CHECKED_MAP: Record<TermId, boolean> = TERMS.reduce(
  (acc, t) => {
    acc[t.id] = false;
    return acc;
  },
  {} as Record<TermId, boolean>,
);

const TermsStep = ({ onNext }: Props) => {
  const [checkedMap, setCheckedMap] = useState<Record<TermId, boolean>>(EMPTY_CHECKED_MAP);

  const allChecked = TERMS.every((t) => checkedMap[t.id]);
  const requiredAllChecked = REQUIRED_IDS.every((id) => checkedMap[id]);

  const toggleAll = () => {
    const next = !allChecked;
    const nextMap: Record<TermId, boolean> = TERMS.reduce(
      (acc, t) => {
        acc[t.id] = next;
        return acc;
      },
      {} as Record<TermId, boolean>,
    );
    setCheckedMap(nextMap);
  };

  const toggleItem = (id: TermId) => {
    setCheckedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleNext = () => {
    if (requiredAllChecked) {
      onNext();
    }
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>약관 동의</h1>
      <p className={s.description}>서비스 이용을 위해 아래 약관에 동의해주세요.</p>

      <label className={s.allTerms}>
        <input type="checkbox" checked={allChecked} onChange={toggleAll} />
        <div className={s.allTermsText}>모든 약관에 동의합니다.</div>
      </label>

      <section className={s.termsContainer}>
        {TERMS.map((term) => (
          <label key={term.id} className={s.terms}>
            <input
              type="checkbox"
              checked={checkedMap[term.id]}
              onChange={() => toggleItem(term.id)}
            />
            <div className={s.termsText}>{term.label}</div>
          </label>
        ))}
      </section>

      <div className={s.buttonContainer}>
        <Button
          variant="primary"
          label="다음"
          disabled={!requiredAllChecked}
          onClick={handleNext}
        />
      </div>
    </section>
  );
};

export default TermsStep;
