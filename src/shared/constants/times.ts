export type TimeOption = {
  value: string | null;
  label: string;
};

export const BREAKFAST_TIMES: TimeOption[] = [
  { value: '06:00', label: '6시' },
  { value: '06:30', label: '6시 30분' },
  { value: '07:00', label: '7시' },
  { value: '07:30', label: '7시 30분' },
  { value: '08:00', label: '8시' },
  { value: '08:30', label: '8시 30분' },
  { value: '09:00', label: '9시' },
  { value: '09:30', label: '9시 30분' },
  { value: '10:00', label: '10시' },
  { value: null, label: '식사 안함' },
];

export const LUNCH_TIMES: TimeOption[] = [
  { value: '11:00', label: '11시' },
  { value: '11:30', label: '11시 30분' },
  { value: '12:00', label: '12시' },
  { value: '12:30', label: '12시 30분' },
  { value: '13:00', label: '13시' },
  { value: '13:30', label: '13시 30분' },
  { value: '14:00', label: '14시' },
  { value: null, label: '식사 안함' },
];

export const DINNER_TIMES: TimeOption[] = [
  { value: '17:00', label: '17시' },
  { value: '17:30', label: '17시 30분' },
  { value: '18:00', label: '18시' },
  { value: '18:30', label: '18시 30분' },
  { value: '19:00', label: '19시' },
  { value: '19:30', label: '19시 30분' },
  { value: '20:00', label: '20시' },
  { value: '20:30', label: '20시 30분' },
  { value: '21:00', label: '21시' },
  { value: null, label: '식사 안함' },
];

export const WAKEUP_TIMES: TimeOption[] = [
  { value: '06:00', label: '6시' },
  { value: '06:30', label: '6시 30분' },
  { value: '07:00', label: '7시' },
  { value: '07:30', label: '7시 30분' },
  { value: '08:00', label: '8시' },
  { value: '08:30', label: '8시 30분' },
  { value: '09:00', label: '9시' },
  { value: '09:30', label: '9시 30분' },
];

export const BEDTIME_TIMES: TimeOption[] = [
  { value: '20:00', label: '20시' },
  { value: '20:30', label: '20시 30분' },
  { value: '21:00', label: '21시' },
  { value: '21:30', label: '21시 30분' },
  { value: '22:00', label: '22시' },
  { value: '22:30', label: '22시 30분' },
  { value: '23:00', label: '23시' },
  { value: '23:30', label: '23시 30분' },
];

export const REPORT_TIMES: TimeOption[] = [
  { value: '09:00', label: '9시' },
  { value: '10:00', label: '10시' },
  { value: '11:00', label: '11시' },
  { value: '12:00', label: '12시' },
  { value: '13:00', label: '13시' },
  { value: '14:00', label: '14시' },
  { value: '15:00', label: '15시' },
  { value: '16:00', label: '16시' },
  { value: '17:00', label: '17시' },
  { value: '18:00', label: '18시' },
  { value: '19:00', label: '19시' },
  { value: '20:00', label: '20시' },
];
