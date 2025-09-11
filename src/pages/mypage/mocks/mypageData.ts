import { DEFAULT_TIME } from '@/pages/signup/constants/medication';

export const MOCK_USER = {
  name: '김땡땡',
  email: 'email@example.com',
};

export const MOCK_MEDS = [
  { name: '혈압약', freq: 1, times: [DEFAULT_TIME] },
  { name: '비타민C', freq: 1, times: [DEFAULT_TIME] },
  { name: '마그네슘', freq: 1, times: [DEFAULT_TIME] },
];
