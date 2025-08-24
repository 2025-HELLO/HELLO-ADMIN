import { style } from '@vanilla-extract/css';

/* 레이아웃 */
export const wrap = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '20px 30px 80px',
  background: '#fff',
});

export const inner = style({
  width: '100%',
  maxWidth: 360,
  '@media': { '(min-width: 420px)': { maxWidth: 400 } },
});

/* 상단 아이콘(원본만) */
export const hero = style({
  textAlign: 'center',
  marginBottom: 16,
});

export const heroIconPlain = style({
  width: 56,
  height: 56,
  display: 'inline-block',
  marginBottom: 10,
});

export const title = style({
  fontSize: 20,
  fontWeight: 800,
  color: '#111',
  margin: '6px 0 8px',
  lineHeight: 1.3,
});

export const subtitle = style({
  fontSize: 13,
  color: '#6b7280',
  lineHeight: 1.6,
  margin: 0,
});

/* 업로드 상자: 점선 테두리 */
export const uploadBox = style({
  border: '2px dashed #d7dde7', // 점선
  background: '#f9fafb',
  borderRadius: 12,
  padding: 16,
  margin: '16px 0 12px',
});

export const uploadCenter = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: 10,
});

export const uploadIconPlain = style({
  width: 28,
  height: 28,
  display: 'block',
});

export const uploadTextWrap = style({
  textAlign: 'center',
});

export const uploadTitle = style({
  fontSize: 14,
  fontWeight: 800,
  color: '#111',
  margin: 0,
});

export const uploadHint = style({
  fontSize: 12,
  color: '#6b7280',
  marginTop: 4,
});

export const uploadFileName = style({
  fontSize: 13,
  fontWeight: 600,
  color: '#111',
  wordBreak: 'break-all',
  margin: 0,
});

export const fileInput = style({
  display: 'none',
});

export const pickBtn = style({
  height: 40,
  padding: '0 14px',
  border: 'none',
  borderRadius: 8,
  background: '#b7d6ff',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

/* 안내 카드: 파랑/회색 버전 */
const cardBase = {
  borderRadius: 12,
  padding: 12,
  margin: '10px 0',
  border: '1px solid transparent',
} as const;

export const infoCardBlue = style({
  ...cardBase,
  background: '#eef5ff',
  borderColor: '#d5e6ff',
});

export const infoCardGray = style({
  ...cardBase,
  background: '#f3f4f6',
  borderColor: '#e5e7eb',
});

export const infoHead = style({
  display: 'flex',
  alignItems: 'center',
  gap: 8,
  marginBottom: 6,
});

export const infoDotBlue = style({
  width: 10,
  height: 10,
  borderRadius: 9999,
  background: '#3b82f6',
});

export const infoDotGray = style({
  width: 10,
  height: 10,
  borderRadius: 9999,
  background: '#9ca3af',
});

export const infoTitle = style({
  fontSize: 14,
  fontWeight: 800,
  color: '#111',
  margin: 0,
});

export const infoDesc = style({
  fontSize: 12,
  color: '#374151',
  lineHeight: 1.6,
  margin: 0,
});

/* 제출 버튼 */
export const submitBtn = style({
  width: '100%',
  height: 44,
  marginTop: 12,
  border: 'none',
  borderRadius: 10,
  background: '#b7d6ff',
  color: '#fff',
  fontWeight: 800,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  selectors: {
    '&:disabled': { opacity: 0.6, cursor: 'not-allowed' },
  },
});
