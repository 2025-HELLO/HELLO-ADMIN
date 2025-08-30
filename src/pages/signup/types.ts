import type { JSX } from 'react';

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
