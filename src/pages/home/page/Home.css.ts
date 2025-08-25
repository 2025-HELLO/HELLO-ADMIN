import { style } from '@vanilla-extract/css';

export const wrap = style({
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 30px 80px', // 헤더 아래 여백
  background: '#fff',
});

export const inner = style({
  width: '100%',
  maxWidth: '360px',
  '@media': {
    '(min-width: 420px)': { maxWidth: '400px' },
  },
});

export const title = style({
  fontSize: '24px',
  fontWeight: 700,
  color: '#111',
  margin: '12px 0 8px',
  marginBottom: '16px',
});

export const subtitle = style({
  fontSize: '14px',
  color: '#666',
  margin: '0 0 20px',
  lineHeight: 1.6,
  marginBottom: '36px',
});

export const card = style({
  display: 'flex',
  gap: '12px',
  alignItems: 'flex-start',
  border: '1px solid #e5e7eb',
  borderRadius: '10px',
  padding: '16px',
  margin: '12px 0',
  background: '#fff',
  marginBottom: '46px',
});

export const icon = style({
  width: 36,
  height: 36,
  flexShrink: 0,
});

export const cardBody = style({
  flex: 1,
});

export const cardTitle = style({
  fontSize: '16px',
  fontWeight: 700,
  color: '#111',
  margin: '0 0 6px',
});

export const cardDesc = style({
  fontSize: '13px',
  color: '#6b7280',
  margin: '0 0 12px',
  lineHeight: 1.5,
});

export const cardBtn = style({
  width: '100%',
  height: '40px',
  border: 'none',
  borderRadius: '5px',
  background: '#A4D5FF',
  color: '#fff',
  fontWeight: 700,
  cursor: 'pointer',
  display: 'flex', // ⬅️ 추가
  alignItems: 'center', // ⬅️ 세로 가운데 정렬
  justifyContent: 'center', // ⬅️ 가로 가운데 정렬
  lineHeight: '1', // ⬅️ 줄 간격 기본화 (안 해도 되지만 안정적임)
  selectors: {
    '&:active': { transform: 'translateY(0.5px)' },
  },
});
