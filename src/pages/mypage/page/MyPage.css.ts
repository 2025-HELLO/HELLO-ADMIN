import { style } from '@vanilla-extract/css';
import { colors, fonts, layout } from '@styles/token';

const formWidth = '30rem';
const formBlock = style({ width: formWidth });

export const container = style([
  layout.flexColumnCenter,
  {
    alignItems: 'center',
    padding: '2.5rem 4.4rem',
  },
]);

export const greet = style([
  fonts.subtitle03,
  formBlock,
  { color: colors.black01, marginBottom: '1rem' },
]);

export const name = style([
  fonts.display01,
  {
    color: colors.black01,
  },
]);

export const email = style([
  fonts.subtitle03,
  formBlock,
  { color: colors.black01, marginBottom: '0.5rem' },
]);

export const subTitle = style([
  fonts.subtitle01,
  formBlock,
  { color: colors.black01, margin: '1rem 0 2rem' },
]);

export const medListBox = style([
  formBlock,
  {
    border: `1px solid ${colors.grey10}`,
    borderRadius: '8px',
    backgroundColor: colors.white01,
    overflow: 'hidden',
  },
]);

export const medRow = style([
  layout.flexBetweenCenter,
  {
    padding: '0.8rem 1rem',
    borderBottom: `1px solid ${colors.grey10}`,
    selectors: {
      '&:last-child': { borderBottom: 'none' },
    },
  },
]);

export const medName = style([fonts.body03, { color: colors.black01 }]);

export const medActions = style([layout.flexAlignCenter, { gap: '0.6rem' }]);

export const medBtn = style([
  fonts.caption02,
  {
    padding: '0.4rem 0.8rem',
    backgroundColor: colors.grey10,
    color: colors.black01,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    selectors: {
      '&:hover': { backgroundColor: colors.grey09 },
      '&:focus-visible': { outline: `2px solid ${colors.blue03}`, outlineOffset: '2px' },
    },
  },
]);

export const medInput = style([
  fonts.body03,
  {
    width: '18rem',
    padding: '0.3rem 0.6rem',
    border: `1px solid ${colors.grey10}`,
    borderRadius: '4px',
    selectors: {
      '&:focus-visible': {
        outline: 'none',
        borderColor: colors.blue03,
        boxShadow: `0 0 0 2px ${colors.blue01}`,
      },
    },
  },
]);

export const medDoseTitle = style([
  fonts.body01,
  formBlock,
  { color: colors.black01, margin: '2rem 0 0.4rem' },
]);

export const btnContainer = style([formBlock, { marginTop: '4rem' }]);

export const logoutRow = style([
  layout.flexCenter,
  {
    gap: '1rem',
    marginTop: '2rem',
  },
]);

export const logoutLink = style([
  fonts.caption02,
  {
    background: 'none',
    border: 'none',
    color: colors.grey07,
    cursor: 'pointer',
    padding: 0,
  },
]);

export const divider = style({
  color: colors.black01,
  lineHeight: '1.8',
});
