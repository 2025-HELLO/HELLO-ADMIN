import type { Dispatch, SetStateAction } from 'react';

import * as s from '../../page/Signup.css';
import { FREQUENCIES, TIMES, DEFAULT_TIME } from '../../constants/medication';

export type Freq = (typeof FREQUENCIES)[number];

export type Time = (typeof TIMES)[number];

interface Props {
  freq: Freq;
  times: Time[];
  setFreq: Dispatch<SetStateAction<Freq>>;
  setTimes: Dispatch<SetStateAction<Time[]>>;
}

const DoseSelector = ({ freq, times, setFreq, setTimes }: Props) => {
  return (
    <div className={s.doseBox}>
      <div className={s.doseLeft}>
        <select
          aria-label="하루 복용 횟수"
          className={s.selectPlain}
          value={freq}
          onChange={(e) => {
            const next = Number(e.target.value) as Freq;
            setFreq(next);
            setTimes((prev) => {
              const nextArr = [...prev];
              if (nextArr.length < next) {
                while (nextArr.length < next) {
                  nextArr.push(DEFAULT_TIME);
                }
              } else if (nextArr.length > next) {
                nextArr.length = next;
              }
              return nextArr as Time[];
            });
          }}
        >
          {FREQUENCIES.map((n) => (
            <option key={n} value={n}>
              하루에 {n} 번
            </option>
          ))}
        </select>
      </div>
      <div className={s.doseDivider} />
      <div className={s.doseRight}>
        {Array.from({ length: freq }).map((_, idx) => (
          <div className={s.timeRow} key={idx}>
            <select
              aria-label={`${idx + 1}번째 복용 시간`}
              className={s.selectPlain}
              value={(times[idx] ?? DEFAULT_TIME) as Time}
              onChange={(e) => {
                const v = e.target.value as Time;
                setTimes((prev) => {
                  const next = [...prev] as Time[];
                  next[idx] = v;
                  return next;
                });
              }}
            >
              {TIMES.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoseSelector;
