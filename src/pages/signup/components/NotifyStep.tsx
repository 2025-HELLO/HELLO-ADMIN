interface Props {
  onNext: () => void;
}

const NotifyStep = ({ onNext }: Props) => {
  return (
    <section>
      <h2>주간 보고서 알림 시간</h2>
      <button onClick={onNext}>다음</button>
    </section>
  );
};

export default NotifyStep;
