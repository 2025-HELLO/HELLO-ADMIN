import { useState } from 'react';

import * as s from '../../page/Signup.css';
import TimeBlock from '../sub/TimeBlock';

import {
  WAKEUP_TIMES,
  BEDTIME_TIMES,
  BREAKFAST_TIMES,
  LUNCH_TIMES,
  DINNER_TIMES,
  REPORT_TIMES,
} from '@/shared/constants/times';
import Button from '@/common/components/button/Button';

interface Props {
  onNext: () => void;
}

interface TimeRow {
  title: string;
  times: string[];
  selected: string;
  onSelect: React.Dispatch<React.SetStateAction<string>>;
}

const NotifyStep = ({ onNext }: Props) => {
  const [selectedWakeup, setSelectedWakeup] = useState(WAKEUP_TIMES[0]);
  const [selectedBreakfast, setSelectedBreakfast] = useState(BREAKFAST_TIMES[0]);
  const [selectedLunch, setSelectedLunch] = useState(LUNCH_TIMES[0]);
  const [selectedDinner, setSelectedDinner] = useState(DINNER_TIMES[0]);
  const [selectedBedtime, setSelectedBedtime] = useState(BEDTIME_TIMES[0]);
  const [selectedReport, setSelectedReport] = useState(REPORT_TIMES[0]);

  const times: TimeRow[] = [
    {
      title: '기상 시간',
      times: WAKEUP_TIMES,
      selected: selectedWakeup,
      onSelect: setSelectedWakeup,
    },
    {
      title: '취침 시간',
      times: BEDTIME_TIMES,
      selected: selectedBedtime,
      onSelect: setSelectedBedtime,
    },
    {
      title: '아침 식사',
      times: BREAKFAST_TIMES,
      selected: selectedBreakfast,
      onSelect: setSelectedBreakfast,
    },
    {
      title: '점심 식사',
      times: LUNCH_TIMES,
      selected: selectedLunch,
      onSelect: setSelectedLunch,
    },
    {
      title: '저녁 식사',
      times: DINNER_TIMES,
      selected: selectedDinner,
      onSelect: setSelectedDinner,
    },

    {
      title: '주간보고서 알림',
      times: REPORT_TIMES,
      selected: selectedReport,
      onSelect: setSelectedReport,
    },
  ];

  return (
    <section className={s.container}>
      <h1 className={s.title}>알림 시간 설정</h1>
      <div className={s.semiTitle}>일상 알림 시간과 주간보고서 알림 시간을 설정해주세요</div>
      <div className={s.timeSection}>
        {times.map((time) => (
          <TimeBlock
            key={time.title}
            title={time.title}
            times={time.times}
            selected={time.selected}
            onSelect={time.onSelect}
          />
        ))}
      </div>
      <div className={s.buttonContainer}>
        <Button variant="primary" label="다음" onClick={onNext} />
      </div>
    </section>
  );
};

export default NotifyStep;
