import { useNavigate } from 'react-router-dom';
import { PATH } from '@shared/constants/path';

import * as s from '../../page/Signup.css';

import { IcNotification, IcCopy } from '@/assets/svgs';
import Button from '@/common/components/button/Button';

const CODE_LENGTH = 8;

const MOCK_CODE = '12345678';

const DoneStep = () => {
  const navigate = useNavigate();
  const codeChars = MOCK_CODE.split('');
  const displayChars = Array.from({ length: CODE_LENGTH }, (_, i) => codeChars[i] ?? '');

  const handleCopy = async () => {
    await navigator.clipboard.writeText(MOCK_CODE);
    alert('인증 코드를 복사했습니다.');
  };

  const handleGoLogin = () => {
    navigate(PATH.LOGIN);
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>회원가입이 완료되었습니다!</h1>
      <div className={s.subTitleCenter}>가입해 주셔서 감사합니다</div>
      <div className={s.verifyCodeContainer}>
        <div className={s.verifyCodeTopRow}>
          <label className={s.verifyCodeTitle} htmlFor="verify-code-0">
            인증 코드
          </label>
          <button
            type="button"
            className={s.copyAction}
            onClick={handleCopy}
            aria-label="인증 코드 복사"
            title="인증 코드 복사"
          >
            <IcCopy className={s.copyIcon} />
            <span className={s.copyText}>복사</span>
          </button>
        </div>
        <div className={s.verifyCodeInputContainer}>
          {displayChars.map((ch, idx) => (
            <input
              key={idx}
              id={idx === 0 ? 'verify-code-0' : undefined}
              type="text"
              className={s.verifyCodeInput}
              maxLength={1}
              inputMode="numeric"
              autoComplete="one-time-code"
              defaultValue={ch}
              readOnly
              aria-readonly
            />
          ))}
        </div>
        <div className={s.verifyCodeHint}>이 코드는 앱 로그인 시 필요합니다</div>
      </div>
      <div className={s.descriptionContainer}>
        <div className={s.descriptionHeader}>
          <IcNotification className={s.descriptionIcon} />
          <span className={s.descriptionText}>중요 안내사항</span>
        </div>
        <div>
          <span className={s.descriptionBody}>인증 코드는 안전한 곳에 보관해 주세요.</span>
          <span className={s.descriptionBody}>
            로그인 시 필요하며 분실 시 계정 복구가 어려울 수 있습니다.
          </span>
        </div>
      </div>

      <div className={s.buttonContainer}>
        <Button variant="primary" label="로그인하러 가기" type="submit" onClick={handleGoLogin} />
      </div>
    </section>
  );
};

export default DoneStep;
