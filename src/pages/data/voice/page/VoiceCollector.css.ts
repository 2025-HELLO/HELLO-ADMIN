import { style } from '@vanilla-extract/css';
import { colors, fonts } from '@styles/token';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1.2rem',
});

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: colors.grey11,
});

export const header = style({
  width: '35.8rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '0.8rem',
});

export const sentenceNumber = style([fonts.subtitle04]);

export const ttsButton = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '4rem',
  height: '5rem',
  border: 'none',
  borderRadius: '8px',
  background: colors.grey11,
  cursor: 'pointer',
});

export const icon = style({
  width: '2.4rem',
  height: '2.4rem',
  flexShrink: 0,
});

export const exampleBox = style([
  fonts.body03,
  {
    width: '35.8rem',
    marginTop: '0.8rem',
    padding: '1.6rem',
    background: colors.grey11,
    borderRadius: '8px',
    color: colors.black01,
  },
]);

export const infoSection = style({
  width: '35.8rem',
  display: 'flex',
  alignItems: 'center',
  gap: '0.8rem',
  marginTop: '0.8rem',
});

export const infoIcon = style({
  width: '1.5rem',
  height: '1.5rem',
  flexShrink: 0,
});

export const infoText = style([
  fonts.body03,
  {
    color: colors.grey06,
  },
]);
