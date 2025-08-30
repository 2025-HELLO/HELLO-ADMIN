import { useFunnel } from '@use-funnel/react-router-dom';

import type { SignupSteps, StepComponent } from '../types';
import TermsStep from '../components/TermsStep';
import ParentInfoStep from '../components/ParentInfoStep';
import NotifyStep from '../components/NotifyStep';
import AccountStep from '../components/AccountStep';
import DoneStep from '../components/DoneStep';

const STEPS = {
  Terms: 'Terms',
  ParentInfo: 'ParentInfo',
  Notify: 'Notify',
  Account: 'Account',
  Done: 'Done',
} as const;

const TermsRenderer: StepComponent = ({ history }) => (
  <TermsStep onNext={() => history.push(STEPS.ParentInfo, {})} />
);
const ParentInfoRenderer: StepComponent = ({ history }) => (
  <ParentInfoStep onNext={() => history.push(STEPS.Notify, {})} />
);
const NotifyRenderer: StepComponent = ({ history }) => (
  <NotifyStep onNext={() => history.push(STEPS.Account, {})} />
);
const AccountRenderer: StepComponent = ({ history }) => (
  <AccountStep onNext={() => history.push(STEPS.Done, {})} />
);
const DoneRenderer: StepComponent = () => <DoneStep />;

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
