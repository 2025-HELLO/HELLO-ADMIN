export const MED_LIST = ['혈압약 A', '오메가3', '비타민B'] as const;
export type MedName = (typeof MED_LIST)[number];

export type DoseMark = 'O' | 'X' | '-';
export type WeekDay = '월' | '화' | '수' | '목' | '금' | '토' | '일';

export interface MedRow {
  day: WeekDay;
  doses: [DoseMark, DoseMark, DoseMark];
}

export const MED_RECORDS: Record<MedName, { week: MedRow[] }> = {
  '혈압약 A': {
    week: [
      { day: '월', doses: ['O', 'O', 'O'] },
      { day: '화', doses: ['O', 'O', 'X'] },
      { day: '수', doses: ['O', 'X', 'X'] },
      { day: '목', doses: ['O', 'O', 'O'] },
      { day: '금', doses: ['O', 'O', 'O'] },
      { day: '토', doses: ['X', 'X', 'X'] },
      { day: '일', doses: ['O', 'O', 'X'] },
    ],
  },
  오메가3: {
    week: [
      { day: '월', doses: ['O', '-', '-'] },
      { day: '화', doses: ['O', '-', '-'] },
      { day: '수', doses: ['X', '-', '-'] },
      { day: '목', doses: ['O', '-', '-'] },
      { day: '금', doses: ['O', '-', '-'] },
      { day: '토', doses: ['O', '-', '-'] },
      { day: '일', doses: ['X', '-', '-'] },
    ],
  },
  비타민B: {
    week: [
      { day: '월', doses: ['O', '-', '-'] },
      { day: '화', doses: ['O', '-', '-'] },
      { day: '수', doses: ['O', '-', '-'] },
      { day: '목', doses: ['O', '-', '-'] },
      { day: '금', doses: ['O', '-', '-'] },
      { day: '토', doses: ['O', '-', '-'] },
      { day: '일', doses: ['O', '-', '-'] },
    ],
  },
};

export interface MedTaken {
  day: WeekDay;
  taken: boolean;
}

export const MED_TAKEN_WEEK: MedTaken[] = [
  { day: '월', taken: true },
  { day: '화', taken: true },
  { day: '수', taken: false },
  { day: '목', taken: true },
  { day: '금', taken: true },
  { day: '토', taken: false },
  { day: '일', taken: true },
];

export interface MealDay {
  day: WeekDay;
  meals: [boolean, boolean, boolean];
}

export const MEAL_WEEK: MealDay[] = [
  { day: '월', meals: [true, true, true] },
  { day: '화', meals: [true, true, false] },
  { day: '수', meals: [false, true, true] },
  { day: '목', meals: [true, true, true] },
  { day: '금', meals: [true, false, true] },
  { day: '토', meals: [false, true, false] },
  { day: '일', meals: [true, true, false] },
];
