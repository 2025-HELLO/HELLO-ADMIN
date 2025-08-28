import { DAYS } from '../constants/days';
export type WeekDay = (typeof DAYS)[number];

export const MED_LIST = ['혈압약 A', '오메가3', '비타민B'] as const;
export type MedName = (typeof MED_LIST)[number];
export type DoseMark = 'O' | 'X';

export interface MedRow {
  day: WeekDay;
  doses: [DoseMark, DoseMark, DoseMark];
}

export interface MedTaken {
  day: WeekDay;
  taken: boolean;
}

export interface MedicationReportData {
  weekDates: string[];
  takenWeek: MedTaken[];
  medList: readonly MedName[];
  records: Record<MedName, { week: MedRow[] }>;
  note: string;
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
      { day: '월', doses: ['O', 'X', 'X'] },
      { day: '화', doses: ['O', 'X', 'X'] },
      { day: '수', doses: ['X', 'X', 'X'] },
      { day: '목', doses: ['O', 'X', 'X'] },
      { day: '금', doses: ['O', 'X', 'X'] },
      { day: '토', doses: ['O', 'X', 'X'] },
      { day: '일', doses: ['X', 'X', 'X'] },
    ],
  },
  비타민B: {
    week: [
      { day: '월', doses: ['O', 'X', 'X'] },
      { day: '화', doses: ['O', 'X', 'X'] },
      { day: '수', doses: ['O', 'X', 'X'] },
      { day: '목', doses: ['O', 'X', 'X'] },
      { day: '금', doses: ['O', 'X', 'X'] },
      { day: '토', doses: ['O', 'X', 'X'] },
      { day: '일', doses: ['O', 'X', 'X'] },
    ],
  },
};

export const MED_TAKEN_WEEK: MedTaken[] = [
  { day: '월', taken: true },
  { day: '화', taken: true },
  { day: '수', taken: false },
  { day: '목', taken: true },
  { day: '금', taken: true },
  { day: '토', taken: false },
  { day: '일', taken: true },
];

export const MEDICATION_REPORT: MedicationReportData = {
  weekDates: ['07.21', '07.22', '07.23', '07.24', '07.25', '07.26', '07.27'],
  takenWeek: MED_TAKEN_WEEK,
  medList: MED_LIST,
  records: MED_RECORDS,
  note: '이번 주 약 복용, 정말 잘 하셨어요! 특히 저녁은 빠짐없이 챙기셨어요. 화요일 하루만 놓치신 게 있어요. 혹시 그날 무슨 일 있으셨을까요?',
} as const;

export interface MealDay {
  day: WeekDay;
  meals: [boolean, boolean, boolean];
}

export interface MealWeekSummary {
  week: MealDay[];
  note: string;
}

export const MEAL_WEEK: MealWeekSummary = {
  week: [
    { day: '월', meals: [true, true, true] },
    { day: '화', meals: [true, true, false] },
    { day: '수', meals: [false, true, true] },
    { day: '목', meals: [true, true, true] },
    { day: '금', meals: [true, false, true] },
    { day: '토', meals: [false, true, false] },
    { day: '일', meals: [true, true, false] },
  ],
  note: '이번 주에는 점심 식사는 거의 매일 잘 챙기셨어요 (95%). 다만, 아침(45%)과 저녁(55%) 식사는 종종 건너뛰신 날이 있었어요. 가볍게라도 드시면 좋아요 :)',
} as const;

export interface WakeDay {
  day: WeekDay;
  time: string;
}

export interface WakeWeekSummary {
  week: WakeDay[];
  note: string;
  avg?: string;
}

export const WAKE_WEEK: WakeWeekSummary = {
  week: [
    { day: '월', time: '07:10' },
    { day: '화', time: '06:55' },
    { day: '수', time: '07:40' },
    { day: '목', time: '07:05' },
    { day: '금', time: '06:50' },
    { day: '토', time: '08:20' },
    { day: '일', time: '08:00' },
  ],
  note: '이번 주 평균 기상 시간은 7시 30분으로 안정적이에요. 금요일엔 9시에 일어나신 점만 제외하면 전체적으로 규칙적인 패턴이에요!',
  avg: '07:30',
} as const;

export interface CompletedSchedule {
  date: string;
  time: string;
  title: string;
}

export interface ScheduleSummary {
  total: number;
  done: number;
  rate: number;
  completed: CompletedSchedule[];
  note: string;
}

export const SCHEDULE_SUMMARY: ScheduleSummary = {
  total: 5,
  done: 4,
  rate: 80,
  completed: [
    { date: '7월 24일', time: '11:30', title: '치과 예약' },
    { date: '7월 25일', time: '11:30', title: '친구와의 약속' },
    { date: '7월 25일', time: '13:15', title: '노래교실' },
    { date: '8월 1일', time: '13:15', title: '노래교실' },
  ],
  note: '이번 주에는 총 5개의 일정 중 4건을 소화하셨어요. 노래교실과 친구와의 약속 등 다양한 활동에 꾸준히 참여하셨어요.',
} as const;

export interface ReminiscenceItem {
  id: string;
  date: string;
  preview: string;
  content: string;
}

export interface ReminiscenceSummary {
  total: number;
  items: ReminiscenceItem[];
  note: string;
}

export const REMINISCENCE_SUMMARY: ReminiscenceSummary = {
  total: 2,
  items: [
    {
      id: '2025-07-21',
      date: '2025년 7월 21일',
      preview: '“남편과의 첫 만남 이야기 첫문장으로 대체”',
      content:
        '그날은 진달래가 활짝 피어 있던 따뜻한 봄날이었어요.\n친구랑 같이 동네 다방에 갔는데, 거기서 지금의 남편을 처음 봤지요.\n하얀 셔츠에 말쑥하게 머리를 빗은 모습이 얼마나 점잖고 멋있어 보이던지...\n첫눈에 마음이 갔어요.\n말도 조곤조곤 잘하고, 농담도 유머 있게 하는데, 괜히 웃음이 나더라고요.\n그날 이후로 그 사람이 계속 생각났어요.\n그렇게 몇 번 더 마주치다가, 용기 내서 먼저 말을 걸어줬고, 그게 우리 인연의 시작이었지요.',
    },
    {
      id: '2025-07-20',
      date: '2025년 7월 20일',
      preview: '“그날은 진달래가 피어 있던 따뜻한 봄날이었지.”',
      content:
        '그날은 진달래가 피어 있던 따뜻한 봄날이었지요.\n오래된 앨범을 정리하다 보니, 그때 찍은 사진들이 참 많더라고요.\n친구들과 함께 공원에서 찍은 사진, 시장 골목에서 웃던 얼굴들...\n사진을 보니 그때의 공기와 햇살이 다시 느껴지는 것만 같았어요.\n그래서 잠깐 산책도 하고, 예전 단골 빵집에도 들렀죠.',
    },
  ],
  note: '이번 주 부모님의 기억 속 이야기 2편이 도착했어요.',
} as const;

export interface GameDayCount {
  day: WeekDay;
  match: number;
  lang: number;
}

export interface GameReportSummary {
  titleA: string;
  titleB: string;
  days: GameDayCount[];
  a: { plays: number; bestTime: string };
  b: { plays: number; sentences: number };
  note: string;
}

export const GAME_REPORT: GameReportSummary = {
  titleA: '같은 그림 찾기',
  titleB: '언어 공부',
  days: [
    { day: '월', match: 6, lang: 3 },
    { day: '화', match: 8, lang: 10 },
    { day: '수', match: 9, lang: 9 },
    { day: '목', match: 8, lang: 11 },
    { day: '금', match: 2, lang: 3 },
    { day: '토', match: 14, lang: 7 },
    { day: '일', match: 5, lang: 6 },
  ],
  a: { plays: 7, bestTime: '2분 50초' },
  b: { plays: 7, sentences: 112 },
  note: '토요일에 가장 많이 게임을 하셨어요! 두 게임 모두 고른 횟수로 즐기셨고, 언어 공부 기록도 안정적이었어요 👏',
} as const;
