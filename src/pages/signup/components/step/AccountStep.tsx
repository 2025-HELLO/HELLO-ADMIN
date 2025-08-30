import type { FormEvent } from 'react';

import * as s from '../../page/Signup.css';

import Button from '@/common/components/button/Button';

interface Props {
  onNext: () => void;
}

const AccountStep = ({ onNext }: Props) => {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const password = formData.get('password') as string;
    const confirm = formData.get('passwordConfirm') as string;

    if (password !== confirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    onNext();
  };

  return (
    <section className={s.container}>
      <h1 className={s.title}>계정 생성</h1>
      <form onSubmit={handleSubmit}>
        <div className={s.inputGroup({ size: 'lg' })}>
          <label htmlFor="id" className={s.inputLabel}>
            아이디
          </label>
          <input
            type="text"
            id="id"
            placeholder="아이디를 입력하세요"
            className={s.input}
            name="username"
            autoComplete="username"
            required
          />
        </div>
        <div className={s.inputGroup({ size: 'lg' })}>
          <label htmlFor="password" className={s.inputLabel}>
            비밀번호
          </label>
          <input
            type="password"
            id="password"
            placeholder="비밀번호를 입력하세요"
            className={s.input}
            name="password"
            autoComplete="new-password"
            required
          />
        </div>
        <div className={s.inputGroup({ size: 'lg' })}>
          <label htmlFor="passwordConfirm" className={s.inputLabel}>
            비밀번호 확인
          </label>
          <input
            type="password"
            id="passwordConfirm"
            placeholder="비밀번호를 다시 입력하세요"
            className={s.input}
            name="passwordConfirm"
            autoComplete="new-password"
            required
          />
        </div>
        <div className={s.buttonContainer}>
          <Button variant="primary" label="다음" type="submit" />
        </div>
      </form>
    </section>
  );
};

export default AccountStep;
