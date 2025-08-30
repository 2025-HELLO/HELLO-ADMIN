interface Props {
  onNext: () => void;
}

const AccountStep = ({ onNext }: Props) => {
  return (
    <section>
      <h2>계정 생성</h2>
      <button onClick={onNext}>다음</button>
    </section>
  );
};

export default AccountStep;
