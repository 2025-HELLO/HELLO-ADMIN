import React from 'react';
import * as styles from './Home.css.ts';

const Home: React.FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.inner}>
        <h1 className={styles.title}>챗봇 데이터 수집</h1>
        <p className={styles.subtitle}>
          부모님의 목소리로 챗봇을 만들기 위한 데이터 수집 과정입니다
        </p>

        {/* 카드: 카카오톡 제출 */}
        <section className={styles.card}>
          <img src="/svgs/ic_home_chat.svg" alt="카카오톡 아이콘" className={styles.icon} />
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>카카오톡 채팅 내역 제출</h2>
            <p className={styles.cardDesc}>
              카카오톡 대화 내역을 업로드하여 챗봇 학습 데이터로 제공합니다.
            </p>
            <button type="button" className={styles.cardBtn}>
              시작하기
            </button>
          </div>
        </section>

        {/* 카드: 음성 녹음 제출 */}
        <section className={styles.card}>
          <img src="/svgs/ic_home_rec.svg" alt="음성 녹음 아이콘" className={styles.icon} />
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>음성 녹음 제출</h2>
            <p className={styles.cardDesc}>음성을 녹음하여 음성 인식 학습 데이터로 제공합니다.</p>
            <button type="button" className={styles.cardBtn}>
              시작하기
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
