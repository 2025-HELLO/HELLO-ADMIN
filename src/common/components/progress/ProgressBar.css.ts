import { style } from '@vanilla-extract/css';
import { colors, fonts } from '@styles/token';

export const container = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',
});

export const track = style({
  position: 'relative',
  width: '35.8rem',
  height: '0.6rem',
  background: colors.grey10,
  borderRadius: '6px',
  overflow: 'hidden',
});

export const bar = style({
  position: 'absolute',
  top: 0,
  left: 0,
  height: '100%',
  background: colors.blue02,
  borderRadius: '6px',
  transition: 'width 200ms ease',
});

export const header = style([
  fonts.body05,
  {
    display: 'flex',
    justifyContent: 'space-between',
    width: '35.8rem',
    color: colors.black01,
  },
]);

export const count = style([
  fonts.body05,
  {
    color: colors.blue03,
  },
]);

export const remainText = style([
  fonts.body05,
  {
    marginTop: '0.4rem',
    width: '35.8rem',
    textAlign: 'left',
    color: colors.grey06,
  },
]);
