import { style } from '@vanilla-extract/css';
import { recipe } from '@vanilla-extract/recipes';
import { colors, fonts, layout } from '@styles/token';

const formWidth = '30rem';

const formBlock = style({ width: formWidth });
const textBlock = style({ width: '30rem' });

// 공통 컨테이너
export const container = style([
  layout.flexColumn,
  {
    alignItems: 'center',
    minHeight: '100vh',
    padding: '2.5rem 4.4rem',
  },
]);

// 진행바
export const progressBarContainer = style([
  layout.flexJustifyCenter,
  {
    marginTop: '2rem',
  },
]);

// 공통 텍스트
export const title = style([
  fonts.title01,
  textBlock,
  { color: colors.black01, marginBottom: '2.2rem', whiteSpace: 'nowrap' },
]);

export const semiTitle = style([fonts.body03, textBlock]);

export const subTitle = style([
  fonts.subtitle01,
  textBlock,
  { color: colors.black01, margin: '1rem 0 2rem' },
]);

export const subTitleCenter = style([
  fonts.subtitle03,
  textBlock,
  { color: colors.black01, textAlign: 'center', marginBottom: '2rem' },
]);

export const description = style([
  fonts.body03,
  textBlock,
  { color: colors.black01, marginBottom: '3.2rem' },
]);

export const form = style([layout.flexColumn, { flex: 1 }]);

// 약관 동의 스텝
export const allTerms = style([
  layout.flexAlignCenter,
  formBlock,
  {
    height: '4rem',
    padding: '0 1.6rem',
    gap: '0.8rem',
    marginBottom: '2.3rem',
    borderRadius: '0.5rem',
    backgroundColor: colors.grey11,
  },
]);

export const allTermsText = style([fonts.body04, { color: colors.black01 }]);

export const termsContainer = style([
  layout.flexColumn,
  formBlock,
  {
    gap: '2.4rem',
  },
]);

export const terms = style([
  layout.flexAlignCenter,
  formBlock,
  {
    padding: '0 1.6rem',
    gap: '0.8rem',
  },
]);

export const termsText = style([fonts.body05, { color: colors.black01 }]);

export const inputGroup = recipe({
  base: [layout.flexColumn],
  variants: {
    size: {
      md: { marginBottom: '2rem' },
      lg: { marginBottom: '5rem' },
    },
  },
  defaultVariants: { size: 'md' },
});

export const inputLabel = style([fonts.body04, { marginBottom: '0.3rem', color: colors.black01 }]);

export const input = style([
  layout.flexAlignCenter,
  fonts.caption02,
  formBlock,
  {
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

// 하단 버튼
export const buttonContainer = style([
  layout.flexCenter,
  {
    position: 'fixed',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '1rem 1.6rem calc(3rem + env(safe-area-inset-bottom))',
  },
]);

export const notiButtonContainer = style([
  layout.flexCenter,
  {
    padding: '1rem 1.6rem calc(3rem + env(safe-area-inset-bottom))',
  },
]);

export const bottomSpacer = style({
  height: '7rem',
});

// 부모 정보 입력 스텝
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

// 부모 정보 요약
export const addMoreBox = style([
  layout.flexCenter,
  formBlock,
  {
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
  formBlock,
  { gap: '0.8rem', margin: '1.2rem 0' },
]);

export const parentSummaryCard = style([
  formBlock,
  {
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

export const parentSummaryActions = style([layout.flexAlignCenter, { gap: '0.8rem' }]);

const buttonReset = style({
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
});

export const parentSummaryAction = style([fonts.caption02, buttonReset, { color: colors.grey08 }]);

export const parentSummaryRow = style([fonts.caption02, { color: colors.black01 }]);

export const addMoreWrapper = style([formBlock, { marginTop: '1rem' }]);

export const requiredMark = style([
  {
    color: colors.error01,
  },
]);

// timeblock
export const timeSection = style({
  marginTop: '3rem',
  width: '30rem',
});

export const timeLabel = style([
  fonts.body04,
  {
    color: colors.black01,
    marginBottom: '1rem',
  },
]);

export const timeBlock = style({
  marginBottom: '2rem',
});

export const timeTitle = style([
  fonts.caption01,
  {
    color: colors.black01,
    marginBottom: '0.5rem',
  },
]);

export const timeGrid = style({
  display: 'grid',
  gap: '0.5rem',
  gridTemplateColumns: 'repeat(4, 1fr)',
});

export const timeButton = style([
  fonts.caption02,
  {
    backgroundColor: colors.white01,
    border: `1px solid ${colors.grey10}`,
    borderRadius: '0.5rem',
    color: colors.black01,
    padding: '1.5rem 0',
    textAlign: 'center',
  },
]);

export const timeButtonActive = style([
  fonts.caption01,
  {
    backgroundColor: colors.blue02,
    border: `1px solid ${colors.blue02}`,
    color: colors.white01,
  },
]);

// 인증 코드
export const verifyCodeContainer = style([
  layout.flexColumn,
  {
    backgroundColor: colors.grey11,
    borderRadius: '10px',
    gap: '3rem',
    marginBottom: '2.4rem',
    padding: '2rem',
    width: '33rem',
  },
]);

export const verifyCodeTitle = style([fonts.caption01, { color: colors.black01 }]);

export const verifyCodeTopRow = style([layout.flexBetweenCenter, { width: '100%' }]);

export const copyAction = style([
  layout.flexAlignCenter,
  {
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    gap: '0.3rem',
  },
]);

export const copyIcon = style({
  width: '1.2rem',
  height: '1.2rem',
  color: colors.grey07,
});

export const copyText = style([fonts.caption02, { color: colors.grey07 }]);

export const verifyCodeInputContainer = style([
  layout.flexAlignCenter,
  {
    gap: '1.4rem',
  },
]);

export const verifyCodeInput = style([
  layout.flexAlignCenter,
  fonts.caption01,
  {
    backgroundColor: colors.white01,
    border: `1px solid ${colors.grey10}`,
    borderRadius: '5px',
    height: '4rem',
    textAlign: 'center',
    width: '2.5rem',
  },
]);

export const verifyCodeHint = style([
  fonts.caption02,
  { color: colors.grey08, textAlign: 'center' },
]);

export const descriptionContainer = style([
  layout.flexColumn,
  {
    border: `1px solid ${colors.grey09}`,
    borderRadius: '10px',
    gap: '0.8rem',
    padding: '2rem 2.8rem',
    width: '33rem',
  },
]);

export const descriptionHeader = style([layout.flexAlignCenter, { gap: '0.5rem' }]);

export const descriptionIcon = style({
  width: '2.1rem',
  height: '2.1rem',
});

export const descriptionText = style([fonts.body01, { color: colors.black01 }]);

export const descriptionBody = style([
  fonts.caption02,
  { display: 'block', color: colors.grey07, whiteSpace: 'nowrap' },
]);
