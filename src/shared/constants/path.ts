export const PATH = {
  ROOT: '/',
  SIGNUP: '/signup',
  LOGIN: '/login',
  MYPAGE: '/mypage',
  VOICE_DATA: '/data/voice',
  WEEKLY_REPORTS: '/weekly-reports',
  WEEKLY_REPORT_DETAIL: (id: string | number) => `/weekly-reports/${id}`,
} as const;
