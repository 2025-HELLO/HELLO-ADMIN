import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { MOCK_MEDS, MOCK_USER } from '../mocks/mypageData';
import { MedDoseEditor, MedList } from '../components';
import * as s from './MyPage.css';

import AddMoreBox from '@/common/components/addMore/AddMoreBox';
import Button from '@/common/components/button/Button';
import { type Freq, type Time } from '@/common/components/doseSelector/DoseSelector';
import { PATH } from '@/shared/constants/path';
import { DEFAULT_TIME } from '@/pages/signup/constants/medication';

interface User {
  name: string;
  email: string;
}

interface Med {
  name: string;
  freq: Freq;
  times: Time[];
}

const userData: User = MOCK_USER;

const MyPage = () => {
  const navigate = useNavigate();
  const [meds, setMeds] = useState<Med[]>(() =>
    MOCK_MEDS.map((m) => ({ name: m.name, freq: m.freq as Freq, times: m.times as Time[] })),
  );

  const removeMed = (idx: number) => {
    setMeds((prev) => prev.filter((_, i) => i !== idx));
  };

  const renameMed = (idx: number, name: string) => {
    const next = name.trim();
    if (!next) {
      return;
    }
    setMeds((prev) => prev.map((m, i) => (i === idx ? { ...m, name: next } : m)));
  };

  const updateFreq = (idx: number, next: Freq | ((p: Freq) => Freq)) => {
    setMeds((prev) =>
      prev.map((m, i) => {
        if (i !== idx) {
          return m;
        }
        const nextFreq = typeof next === 'function' ? (next as (p: Freq) => Freq)(m.freq) : next;
        const nextTimes = [...m.times, ...Array(nextFreq).fill(DEFAULT_TIME)].slice(
          0,
          nextFreq,
        ) as Time[];
        return { ...m, freq: nextFreq, times: nextTimes };
      }),
    );
  };

  const updateTimes = (idx: number, value: Time[] | ((p: Time[]) => Time[])) => {
    setMeds((prev) =>
      prev.map((m, i) => ({
        ...m,
        times:
          i === idx
            ? typeof value === 'function'
              ? (value as (p: Time[]) => Time[])(m.times)
              : value
            : m.times,
      })),
    );
  };

  return (
    <section className={s.container}>
      <h1 className={s.greet}>
        <span className={s.name}>{userData.name}</span>님, 안녕하세요!
      </h1>
      <div className={s.email}>{userData.email}</div>
      <h2 className={s.subTitle}>복용하는 약 정보</h2>
      <MedList meds={meds} onRename={renameMed} onRemove={removeMed} />

      <AddMoreBox
        text="약 추가하기"
        onClick={() => {
          setMeds((prev) => [
            ...prev,
            { name: '', freq: 1 as Freq, times: [DEFAULT_TIME] as Time[] },
          ]);
        }}
      />

      {meds.map((med, idx) => (
        <MedDoseEditor
          key={`dose-${idx}`}
          title={med.name || `약 ${idx + 1}`}
          freq={med.freq}
          times={med.times}
          setFreq={(f) => updateFreq(idx, f)}
          setTimes={(t) => updateTimes(idx, t)}
        />
      ))}
      <div className={s.btnContainer}>
        <Button variant="primary" label="저장" />
      </div>

      <div className={s.chatCtaCard}>
        <div className={s.chatCtaTitle}>챗봇 데이터 수집</div>
        <button type="button" className={s.chatCtaBtn} onClick={() => navigate(PATH.ROOT)}>
          추가하러 가기
        </button>
      </div>

      <div className={s.logoutRow}>
        <button type="button" className={s.logoutLink}>
          로그아웃
        </button>
        <span className={s.divider}>|</span>
        <button type="button" className={s.logoutLink}>
          회원탈퇴
        </button>
      </div>
    </section>
  );
};

export default MyPage;
