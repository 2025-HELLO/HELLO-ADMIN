import { style } from '@vanilla-extract/css';
import { colors, fonts, layout } from '@styles/token';

const formWidth = '30rem';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2.5rem 4.4rem',
  },
]);

export const progressBarContainer = style([
  {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '2rem',
  },
]);

export const title = style([
  fonts.title01,
  { color: colors.black01, width: '30rem', marginBottom: '2.2rem' },
]);

export const subTitle = style([
  fonts.subtitle01,
  { color: colors.black01, width: '30rem', margin: '1.5rem 0' },
]);

export const description = style([
  fonts.body03,
  { color: colors.black01, width: '30rem', marginBottom: '3.2rem' },
]);

export const allTerms = style([
  layout.flexAlignCenter,
  {
    width: formWidth,
    height: '3.8rem',
    padding: '0 1.6rem',
    gap: '0.8rem',
    marginBottom: '2.3rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.grey11,
  },
]);

export const allTermsText = style([fonts.caption01, { color: colors.black01 }]);

export const termsContainer = style([
  layout.flexColumn,
  {
    width: formWidth,
    gap: '2.4rem',
  },
]);

export const terms = style([
  layout.flexAlignCenter,
  {
    width: formWidth,
    padding: '0 1.6rem',
    gap: '0.8rem',
  },
]);

export const termsText = style([fonts.caption02, { color: colors.black01 }]);

export const inputGroup = style([
  layout.flexColumn,
  {
    marginBottom: '2rem',
  },
]);

export const inputLabel = style([fonts.body04, { marginBottom: '0.3rem', color: colors.black01 }]);

export const input = style([
  layout.flexAlignCenter,
  fonts.caption02,
  {
    width: formWidth,
    height: '4rem',
    padding: '0 1.6rem',
    border: `1px solid ${colors.grey10}`,
    borderRadius: '5px',
    backgroundColor: colors.white01,
    color: colors.black01,
    selectors: {
      '&::placeholder': {
        color: colors.grey09,
        opacity: 1,
      },
    },
  },
]);

export const buttonContainer = style([
  {
    position: 'fixed',
    bottom: '5.5rem',
    left: '50%',
    transform: 'translateX(-50%)',
  },
]);

export const doseBox = style([
  {
    width: formWidth,
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

export const doseDivider = style([
  {
    width: '0.1rem',
    alignSelf: 'stretch',
    backgroundColor: colors.grey10,
  },
]);

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
  {
    width: formWidth,
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

export const addMoreBox = style([
  layout.flexCenter,
  {
    width: formWidth,
    height: '4rem',
    gap: '0.6rem',
    borderRadius: '5px',
    border: `1px dashed ${colors.grey10}`,
    color: colors.grey09,
    backgroundColor: colors.white01,
    cursor: 'pointer',
  },
]);

export const addMoreIcon = style([fonts.caption02]);

export const addMoreText = style([fonts.caption02, { color: colors.grey09 }]);

export const parentSummaryList = style([
  layout.flexColumn,
  { width: formWidth, gap: '0.8rem', margin: '1.2rem 0' },
]);

export const parentSummaryCard = style([
  {
    width: formWidth,
    border: `1px solid ${colors.grey10}`,
    borderRadius: '8px',
    backgroundColor: colors.white01,
    padding: '0.9rem 1rem',
  },
]);

export const parentSummaryHeader = style([
  layout.flexBetweenCenter,
  {
    marginBottom: '0.6rem',
  },
]);

export const parentSummaryTitle = style([fonts.body04, { color: colors.black01 }]);

export const parentSummaryActions = style([
  {
    display: 'flex',
    gap: '0.8rem',
  },
]);

export const parentSummaryAction = style([
  fonts.caption02,
  {
    color: colors.grey08,
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
]);

export const parentSummaryRow = style([fonts.caption02, { color: colors.black01 }]);

export const addMoreWrapper = style([{ width: formWidth, marginTop: '1rem' }]);

export const requiredMark = style([
  {
    color: colors.error01,
  },
]);
