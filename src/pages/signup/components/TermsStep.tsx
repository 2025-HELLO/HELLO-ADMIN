interface Props {
  onNext: () => void;
}

const TermsStep = ({ onNext }: Props) => {
  return (
    <section>
      <h2>약관 동의</h2>
      <button onClick={onNext}>다음</button>
    </section>
  );
};

export default TermsStep;
