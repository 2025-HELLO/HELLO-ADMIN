import ProgressBar from '@common/components/progress/ProgressBar';
import type { ReactNode } from 'react';

import * as s from '../page/Signup.css';

const TOTAL_STEPS = 5 as const;

interface StepLayoutProps {
  current: number;
  children: ReactNode;
}

const StepLayout = ({ current, children }: StepLayoutProps) => (
  <>
    <div className={s.progressBarContainer}>
      <ProgressBar total={TOTAL_STEPS} current={current} minimal />
    </div>
    {children}
  </>
);

export default StepLayout;
