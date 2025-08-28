import * as s from '../page/WeeklyReportDetail.css';
import { MEAL_WEEK } from '../mocks/reportData';
import MealDonut from './MealDonut';

function calcMealPercents() {
  const totalDays = MEAL_WEEK.week.length;
  const sums = [0, 0, 0];
  MEAL_WEEK.week.forEach((d) => {
    d.meals.forEach((v: boolean, i: number) => {
      if (v) {
        sums[i] += 1;
      }
    });
  });
  const toPct = (n: number) => Math.round((n / totalDays) * 100);
  return [toPct(sums[0]), toPct(sums[1]), toPct(sums[2])];
}

const labels: [string, string][] = [
  ['아침', 'Breakfast'],
  ['점심', 'Lunch'],
  ['저녁', 'Dinner'],
];

const MealPatternReport = () => {
  const [b, l, d] = calcMealPercents();
  return (
    <>
      <h2 className={s.sectionTitleOutside} id="meal-title">
        🍚 식사 패턴 리포트
      </h2>
      <section className={s.section} aria-labelledby="meal-title">
        <div className={s.sectionContent}>
          <div className={s.legend} aria-label="식사 범례">
            <div className={s.legendItem}>
              <span className={s.legendDotOk} />
              <span>식사 O</span>
            </div>
            <div className={s.legendItem}>
              <span className={s.legendDotNo} />
              <span>식사 X</span>
            </div>
          </div>
          <div className={s.mealRow}>
            <MealDonut label={labels[0][0]} ok={b} />
            <MealDonut label={labels[1][0]} ok={l} />
            <MealDonut label={labels[2][0]} ok={d} />
          </div>
        </div>
      </section>
      <div className={s.medNote}>{MEAL_WEEK.note}</div>
    </>
  );
};

export default MealPatternReport;
