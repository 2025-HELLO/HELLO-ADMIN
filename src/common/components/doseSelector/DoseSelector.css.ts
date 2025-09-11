import { style } from '@vanilla-extract/css';
import { colors, fonts, layout } from '@styles/token';

const formWidth = '30rem';

const formBlock = style({ width: formWidth });

export const doseBox = style([
  formBlock,
  {
    minHeight: '4rem',
    display: 'flex',
    alignItems: 'stretch',
    border: `1px solid ${colors.grey10}`,
    borderRadius: '5px',
    backgroundColor: colors.white01,
    padding: '0 1rem',
    gap: '1rem',
  },
]);

export const doseLeft = style([
  layout.flexAlignCenter,
  {
    width: '50%',
  },
]);

const fullHeightDivider = style({
  width: '0.1rem',
  alignSelf: 'stretch',
  backgroundColor: colors.grey10,
});

export const doseDivider = style([fullHeightDivider]);

export const doseRight = style([
  layout.flexColumn,
  {
    width: '50%',
    alignItems: 'stretch',
    gap: '0.8rem',
    padding: '0.8rem 0',
  },
]);

export const selectPlain = style([
  fonts.caption02,
  {
    width: '100%',
    height: '100%',
    padding: 0,
    border: 'none',
    background: 'transparent',
    color: colors.black01,
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    MozAppearance: 'none',
    selectors: {
      '&:focus': {
        outline: 'none',
      },
    },
  },
]);

export const timeList = style([
  layout.flexColumn,
  formBlock,
  {
    gap: '0.8rem',
    marginTop: '0.6rem',
  },
]);

export const timeRow = style([
  layout.flexAlignCenter,
  {
    height: '2.8rem',
  },
]);
