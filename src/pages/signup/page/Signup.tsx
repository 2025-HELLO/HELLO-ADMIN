import { useFunnel } from '@use-funnel/react-router-dom';

import StepLayout from '../components/StepLayout';
import type { SignupSteps, StepComponent } from '../types';
import TermsStep from '../components/step/TermsStep';
import ParentInfoStep from '../components/step/ParentInfoStep';
import NotifyStep from '../components/step/NotifyStep';
import AccountStep from '../components/step/AccountStep';
import DoneStep from '../components/step/DoneStep';

const STEPS = {
  Terms: 'Terms',
  ParentInfo: 'ParentInfo',
  Notify: 'Notify',
  Account: 'Account',
  Done: 'Done',
} as const;

const TermsRenderer: StepComponent = ({ history }) => (
  <StepLayout current={1}>
    <TermsStep onNext={() => history.push(STEPS.ParentInfo, {})} />
  </StepLayout>
);
const ParentInfoRenderer: StepComponent = ({ history }) => (
  <StepLayout current={2}>
    <ParentInfoStep onNext={() => history.push(STEPS.Notify, {})} />
  </StepLayout>
);
const NotifyRenderer: StepComponent = ({ history }) => (
  <StepLayout current={3}>
    <NotifyStep onNext={() => history.push(STEPS.Account, {})} />
  </StepLayout>
);
const AccountRenderer: StepComponent = ({ history }) => (
  <StepLayout current={4}>
    <AccountStep onNext={() => history.push(STEPS.Done, {})} />
  </StepLayout>
);
const DoneRenderer: StepComponent = () => (
  <StepLayout current={5}>
    <DoneStep />
  </StepLayout>
);

const Signup = () => {
  const funnel = useFunnel<SignupSteps>({
    id: 'signup-funnel',
    initial: { step: STEPS.Terms, context: {} },
  });

  return (
    <funnel.Render
      Terms={TermsRenderer}
      ParentInfo={ParentInfoRenderer}
      Notify={NotifyRenderer}
      Account={AccountRenderer}
      Done={DoneRenderer}
    />
  );
};

export default Signup;
