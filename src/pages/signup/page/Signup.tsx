import { useFunnel } from '@use-funnel/react-router-dom';

import StepLayout from '../components/StepLayout';
import type { SignupSteps, StepComponent } from '../types';
import TermsStep from '../components/step/TermsStep';
import ParentInfoStep from '../components/step/ParentInfoStep';
import NotifyStep from '../components/step/NotifyStep';
import AccountStep from '../components/step/AccountStep';
import DoneStep from '../components/step/DoneStep';

const STEP_ORDER = ['Terms', 'ParentInfo', 'Notify', 'Account', 'Done'] as const;
type StepKey = (typeof STEP_ORDER)[number];

const indexOf = (k: StepKey) => STEP_ORDER.indexOf(k) + 1;

const makeRenderer =
  (
    key: Exclude<StepKey, 'Done'>,
    Comp: React.FC<{ onNext: () => void }>,
    next: StepKey,
  ): StepComponent =>
  ({ history }) => (
    <StepLayout current={indexOf(key)}>
      <Comp onNext={() => history.push(next, {})} />
    </StepLayout>
  );

const TermsRenderer: StepComponent = makeRenderer('Terms', TermsStep, 'ParentInfo');
const ParentInfoRenderer: StepComponent = makeRenderer('ParentInfo', ParentInfoStep, 'Notify');
const NotifyRenderer: StepComponent = makeRenderer('Notify', NotifyStep, 'Account');
const AccountRenderer: StepComponent = makeRenderer('Account', AccountStep, 'Done');
const DoneRenderer: StepComponent = () => (
  <StepLayout current={indexOf('Done')}>
    <DoneStep />
  </StepLayout>
);

const Signup = () => {
  const funnel = useFunnel<SignupSteps>({
    id: 'signup-funnel',
    initial: { step: STEP_ORDER[0], context: {} },
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
