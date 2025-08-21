import { style } from '@vanilla-extract/css';
import { colors, fonts, layout } from '@styles/token';

export const container = style([layout.flexColumnCenter, { gap: '1.2rem', padding: '2rem' }]);

export const divider = style({
  width: '100%',
  height: '1px',
  backgroundColor: colors.grey11,
});

export const header = style([layout.flexBetweenCenter, { width: '35.8rem', marginTop: '0.8rem' }]);

export const sentenceNumber = style([fonts.subtitle04]);

export const ttsButton = style([
  layout.flexCenter,
  {
    width: '4rem',
    height: '5rem',
    border: 'none',
    borderRadius: '8px',
    background: colors.grey11,
    cursor: 'pointer',
  },
]);

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

export const infoSection = style([
  layout.flexAlignCenter,
  { width: '35.8rem', gap: '0.8rem', marginTop: '0.8rem' },
]);

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

export const recorderSection = style([
  layout.flexColumnCenter,
  { gap: '1.6rem', marginTop: '2rem', width: '100%' },
]);

export const visualizerWrapper = style([layout.flexColumnCenter, { gap: '2.4rem' }]);

export const visualizer = style({
  width: '35.8rem',
  height: '6rem',
  backgroundColor: colors.grey11,
  borderRadius: '8px',
});

export const timer = style([
  fonts.title04,
  {
    color: colors.black01,
  },
]);

export const recordButton = style([
  layout.flexCenter,
  {
    width: '6rem',
    height: '6rem',
    borderRadius: '50%',
    backgroundColor: colors.error01,
    border: 'none',
    cursor: 'pointer',
    boxShadow: '0 0.4rem 0.8rem rgba(0, 0, 0, 0.1)',
  },
]);

export const recordIcon = style({
  width: '2.4rem',
  height: '2.4rem',
});

export const playIcon = style({
  width: '1.3rem',
  height: '1.3rem',
});

export const actionButtons = style([
  layout.flexColumnJustifyCenter,
  { gap: '1.2rem', marginTop: '1rem' },
]);
