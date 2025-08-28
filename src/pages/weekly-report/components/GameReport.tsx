import * as s from '../page/WeeklyReportDetail.css';
import { GAME_REPORT } from '../mocks/reportData';

import { colors } from '@/shared/styles/token';

const VB_W = 400;
const VB_H = 240;
const M = { top: 24, right: 30, bottom: 40, left: 44 };
const CH_W = VB_W - M.left - M.right;
const CH_H = VB_H - M.top - M.bottom;

const MAX_Y = 36;
const TICKS = [0, 6, 12, 18, 24, 30, 36];

const GameReport = () => {
  const days = GAME_REPORT.days;
  const step = CH_W / days.length;
  const xAt = (i: number) => M.left + step * i + step / 2;
  const yAt = (v: number) => M.top + CH_H * (1 - v / MAX_Y);

  const bw = step * 0.6;

  return (
    <>
      <h2 className={s.sectionTitleOutside} id="game-title">
        🕹️ 게임 활동 리포트
      </h2>
      <div aria-labelledby="game-title">
        <div className={s.gameSubtitle}>일별 게임 횟수</div>
        <svg
          className={s.gameChart}
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          role="img"
          aria-label="일별 게임 횟수 막대그래프"
        >
          {TICKS.slice(1).map((t) => (
            <line
              key={t}
              x1={M.left}
              x2={M.left + CH_W}
              y1={yAt(t)}
              y2={yAt(t)}
              stroke={colors.grey10}
              strokeWidth={1}
            />
          ))}

          <line
            x1={M.left}
            x2={M.left}
            y1={M.top}
            y2={M.top + CH_H}
            stroke={colors.black01}
            strokeWidth={2}
          />
          <line
            x1={M.left}
            x2={M.left + CH_W}
            y1={M.top + CH_H}
            y2={M.top + CH_H}
            stroke={colors.black01}
            strokeWidth={2}
          />

          <g transform={`translate(${M.left + CH_W - 120}, ${M.top - 10})`}>
            <circle cx={0} cy={0} r={4} fill={colors.yellow04} />
            <text x={8} y={4} fontSize={11} fill={colors.black01}>
              언어 공부
            </text>
            <circle cx={80} cy={0} r={4} fill={colors.blue04} />
            <text x={88} y={4} fontSize={11} fill={colors.black01}>
              같은 그림 찾기
            </text>
          </g>

          {days.map((d, i) => {
            const x = xAt(i) - bw / 2;
            const hB = (d.match / MAX_Y) * CH_H;
            const hA = (d.lang / MAX_Y) * CH_H;
            const yB = M.top + CH_H - hB;
            const yA = yB - hA;
            return (
              <g key={d.day}>
                <rect x={x} y={yB} width={bw} height={hB} fill={colors.blue04} rx={3} />
                <rect x={x} y={yA} width={bw} height={hA} fill={colors.yellow04} rx={3} />
                <text
                  x={xAt(i)}
                  y={VB_H - 12}
                  fontSize={11}
                  textAnchor="middle"
                  fill={colors.black01}
                >
                  {d.day}
                </text>
              </g>
            );
          })}

          {TICKS.map((t) => (
            <text
              key={`y${t}`}
              x={M.left - 10}
              y={yAt(t) + 4}
              fontSize={11}
              textAnchor="end"
              fill={colors.black01}
            >
              {t}
            </text>
          ))}
        </svg>

        <div className={s.gameCards}>
          <div className={s.gameCard}>
            <div className={s.gameCardTitle}>🧩 {GAME_REPORT.titleA}</div>
            <div className={s.gameCardMeta}>최단 시간: {GAME_REPORT.a.bestTime}</div>
            <div className={s.gameCardMeta}>플레이 {GAME_REPORT.a.plays}회</div>
          </div>
          <div className={s.gameCard}>
            <div className={s.gameCardTitle}>🔤 {GAME_REPORT.titleB}</div>
            <div className={s.gameCardMeta}>학습한 문장 수: {GAME_REPORT.b.sentences}문장</div>
            <div className={s.gameCardMeta}>플레이 {GAME_REPORT.b.plays}회</div>
          </div>
        </div>
      </div>

      <div className={s.medNote}>{GAME_REPORT.note}</div>
    </>
  );
};
export default GameReport;
