import { style } from '@vanilla-extract/css';

import { colors, fonts, layout } from '@/shared/styles/token';

export const page = style({
  padding: '1.25rem 2rem 2rem',
});

export const titleLine = style([
  fonts.title03,
  {
    margin: 0,
  },
]);

export const list = style([
  layout.flexColumn,
  {
    gap: '1.5rem',
    marginTop: '3rem',
  },
]);

export const card = style([
  layout.flexAlignCenter,
  {
    background: colors.blue01,
    borderRadius: '10px',
    cursor: 'pointer',
    width: '100%',
    height: '6rem',
    position: 'relative',
  },
]);

export const cardText = style([
  fonts.subtitle03,
  {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    whiteSpace: 'nowrap',
  },
]);

export const chevron = style({
  position: 'absolute',
  right: '2.5rem',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '1.25rem',
  height: '1.25rem',
  color: colors.black01,
});
