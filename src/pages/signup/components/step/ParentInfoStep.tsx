interface Props {
  onNext: () => void;
}

const ParentInfoStep = ({ onNext }: Props) => {
  return (
    <section>
      <h2>부모 정보 입력</h2>
      <button onClick={onNext}>다음</button>
    </section>
  );
};

export default ParentInfoStep;
