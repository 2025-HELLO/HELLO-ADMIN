import { useNavigate } from 'react-router-dom';

import * as s from './WeeklyReportList.css';

import { IcRightarrow } from '@/assets/svgs';
import { PATH } from '@/shared/constants/path';

const WeeklyReportList = () => {
  const navigate = useNavigate();

  const items = [
    { id: 9, label: '9주차', range: '03.03 ~ 03.09' },
    { id: 8, label: '8주차', range: '02.24 ~ 03.02' },
    { id: 7, label: '7주차', range: '02.17 ~ 02.23' },
    { id: 6, label: '6주차', range: '02.10 ~ 02.16' },
    { id: 5, label: '5주차', range: '02.03 ~ 02.09' },
    { id: 4, label: '4주차', range: '01.27 ~ 02.02' },
    { id: 3, label: '3주차', range: '01.20 ~ 01.26' },
    { id: 2, label: '2주차', range: '01.13 ~ 01.19' },
    { id: 1, label: '1주차', range: '01.06 ~ 01.12' },
  ];

  return (
    <div className={s.page}>
      <div>
        <p className={s.titleLine}>홍길동님의</p>
        <p className={s.titleLine}>지난 주간 보고서를 확인하세요</p>
      </div>

      <div className={s.list}>
        {items.map((it) => (
          <div
            key={it.id}
            className={s.card}
            role="button"
            tabIndex={0}
            onClick={() =>
              navigate(PATH.WEEKLY_REPORT_DETAIL(it.id), { state: { range: it.range } })
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                navigate(PATH.WEEKLY_REPORT_DETAIL(it.id), { state: { range: it.range } });
              }
            }}
          >
            <span className={s.cardText}>
              {it.label} ({it.range})
            </span>
            <IcRightarrow className={s.chevron} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeeklyReportList;
