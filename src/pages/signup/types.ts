import type { JSX } from 'react';

import { FREQUENCIES, TIMES } from './constants/medication';

export interface SignupSteps {
  Terms: {};
  ParentInfo: {};
  Notify: {};
  Account: {};
  Done: {};
  [key: string]: {};
}

export interface FunnelHistory {
  push: (step: string, context: {}) => void;
}

export interface StepComponent {
  (args: { history: FunnelHistory }): JSX.Element;
}

export type Freq = (typeof FREQUENCIES)[number];
export type Time = (typeof TIMES)[number];

export interface ParentEntry {
  parentName: string;
  parentAge: string;
  drugName: string;
  freq: Freq;
  times: Time[];
}
