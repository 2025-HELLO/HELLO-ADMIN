import React, { useRef, useState } from 'react';
import * as styles from './ChatCollector.css';

const ChatCollector: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [file, setFile] = useState<File | null>(null);

  const onPickFile = () => fileInputRef.current?.click();

  const onChangeFile: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const f = e.target.files?.[0] ?? null;
    setFile(f);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    // TODO: 업로드 API 연동
  };

  return (
    <form className={styles.wrap} onSubmit={onSubmit}>
      <div className={styles.inner}>
        {/* 상단: 카카오톡 아이콘 */}
        <div className={styles.hero}>
          <img src="/svgs/ic_cacao.svg" alt="카카오톡 아이콘" className={styles.heroIconPlain} />
          <h1 className={styles.title}>카카오톡 대화 내역을 업로드해주세요</h1>
          <p className={styles.subtitle}>
            카카오톡에서 내보낸 대화 내역 파일을
            <br />
            선택하여 업로드할 수 있습니다.
          </p>
        </div>

        {/* 업로드 상자 */}
        <div className={styles.uploadBox}>
          <div className={styles.uploadCenter}>
            <img src="/svgs/ic_uproad.svg" alt="업로드 아이콘" className={styles.uploadIconPlain} />
            <div className={styles.uploadTextWrap}>
              {file ? (
                <>
                  <p className={styles.uploadFileName}>{file.name}</p>
                  <p className={styles.uploadHint}>선택한 파일을 업로드합니다.</p>
                </>
              ) : (
                <>
                  <p className={styles.uploadTitle}>파일을 첨부하세요</p>
                  <p className={styles.uploadHint}>
                    지원 형식: <b>.csv</b>
                  </p>
                </>
              )}
            </div>

            <input
              ref={fileInputRef}
              type="file"
              accept=".csv"
              className={styles.fileInput}
              onChange={onChangeFile}
            />
            <button type="button" className={styles.pickBtn} onClick={onPickFile}>
              파일 선택하기
            </button>
          </div>
        </div>

        {/* 가이드 섹션: 파랑 (ic_information.svg) */}
        <section className={styles.infoCardBlue}>
          <div className={styles.infoHead}>
            <img src="/svgs/ic_information.svg" alt="정보 아이콘" className={styles.infoIcon} />
            <h2 className={styles.infoTitle}>파일 내보내기 방법</h2>
          </div>
          <p className={styles.infoDesc}>
            카카오톡 &gt; <b>채팅방</b> &gt; <b>설정(≡)</b> &gt; <b>대화 내용 내보내기</b>
          </p>
        </section>

        {/* 가이드 섹션: 회색 (ic_protection.svg) */}
        <section className={styles.infoCardGray}>
          <div className={styles.infoHead}>
            <img src="/svgs/ic_protection.svg" alt="보호 아이콘" className={styles.infoIcon} />
            <h2 className={styles.infoTitle}>개인정보 보호</h2>
          </div>
          <p className={styles.infoDesc}>
            업로드된 대화 내역은 안전하게 암호화되어 저장되며, 분석 완료 후 자동으로 삭제됩니다.
          </p>
        </section>

        {/* 저장 버튼 */}
        <button type="submit" className={styles.submitBtn} disabled={!file}>
          저장하기
        </button>
      </div>
    </form>
  );
};

export default ChatCollector;
