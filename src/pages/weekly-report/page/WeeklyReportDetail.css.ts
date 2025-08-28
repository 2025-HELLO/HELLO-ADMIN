import { style } from '@vanilla-extract/css';
import { styleVariants } from '@vanilla-extract/css';

import { colors, fonts, zIndex } from '@/shared/styles/token';
import { layout } from '@/shared/styles/token/layout.css';

export const CONTENT_WIDTH = '35.5rem';

export const container = style([
  layout.flexColumnCenter,
  {
    padding: '2rem 0',
  },
]);

export const title = style([
  fonts.title03,
  {
    width: CONTENT_WIDTH,
    marginBottom: '2rem',
    textAlign: 'left',
  },
]);

export const summaryBox = style([
  layout.flexColumn,
  {
    width: CONTENT_WIDTH,
    height: '13.6rem',
    backgroundColor: colors.grey11,
    borderRadius: '8px',
    padding: '1.6rem',
    gap: '1.5rem',
  },
]);

export const summaryTitle = style([
  fonts.body02,
  {
    textAlign: 'center',
  },
]);

export const summaryRow = style(layout.flexBetweenCenter);

export const summaryMiniBox = style([
  layout.flexColumnJustifyCenter,
  {
    width: '9.5rem',
    height: '7rem',
    borderRadius: '18px',
  },
]);

const summaryMiniBoxColor = styleVariants({
  medication: { backgroundColor: colors.blue01 },
  meal: { backgroundColor: colors.green01 },
  schedule: { backgroundColor: colors.yellow01 },
});

export const summaryMiniBoxMedication = style([summaryMiniBox, summaryMiniBoxColor.medication]);
export const summaryMiniBoxMeal = style([summaryMiniBox, summaryMiniBoxColor.meal]);
export const summaryMiniBoxSchedule = style([summaryMiniBox, summaryMiniBoxColor.schedule]);

export const summaryText = style([
  fonts.body03,
  layout.flexColumnCenter,
  {
    gap: '0.25rem',
    textAlign: 'center',
  },
]);

export const section = style([
  layout.flexColumn,
  {
    width: CONTENT_WIDTH,
    backgroundColor: colors.grey11,
    borderRadius: '8px',
    padding: '1.6rem',
    gap: '0.75rem',
  },
]);

export const sectionContent = style([
  {
    position: 'relative',
    paddingTop: '2rem',
    paddingRight: '6.4rem',
  },
]);

export const sectionTitle = style([
  fonts.body01,
  {
    textAlign: 'left',
  },
]);

export const sectionTitleOutside = style([
  fonts.body02,
  {
    width: CONTENT_WIDTH,
    textAlign: 'left',
    marginTop: '2rem',
    marginBottom: '0.5rem',
  },
]);

export const dotRow = style([
  layout.flexBetweenCenter,
  {
    width: '100%',
  },
]);

export const dotItem = style([
  layout.flexColumnCenter,
  {
    gap: '0.25rem',
  },
]);

export const dot = style([
  {
    width: '1.2rem',
    height: '1.2rem',
    borderRadius: '50%',
    backgroundColor: colors.grey09,
  },
]);

const dotStatus = styleVariants({
  taken: { backgroundColor: colors.green02 },
  missed: { backgroundColor: colors.pink01 },
});

export const dotTaken = style([dot, dotStatus.taken]);
export const dotMissed = style([dot, dotStatus.missed]);

export const dayLabel = style([
  fonts.caption01,
  {
    color: colors.black01,
  },
]);

export const dateLabel = style([
  fonts.caption02,
  {
    color: colors.black01,
  },
]);

export const medReportBox = style([
  layout.flexColumn,
  {
    width: CONTENT_WIDTH,
    backgroundColor: colors.grey11,
    borderRadius: '8px',
    padding: '1.6rem',
    gap: '0.75rem',
    marginTop: '1.5rem',
  },
]);

export const medReportHeader = style([
  {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
]);

export const medReportTitle = style([
  fonts.body01,
  {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    textAlign: 'center',
  },
]);

export const medSelectLabel = style(layout.flexAlignCenter);

export const visuallyHidden = style({
  position: 'absolute',
  width: '0.1rem',
  height: '0.1rem',
  padding: 0,
  margin: '-0.1rem',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});

export const medSelect = style([
  fonts.body04,
  {
    padding: '0.4rem 0.8rem',
    borderRadius: '4px',
    border: `1px solid ${colors.grey09}`,
    backgroundColor: colors.white01,
    color: colors.black01,
  },
]);

export const medTableWrap = style([
  layout.flexColumn,
  {
    width: '100%',
  },
]);

export const medTrHead = style([
  layout.flexBetweenCenter,
  fonts.body01,
  {
    padding: '0.8rem 0',
    borderBottom: `2px dotted ${colors.grey09}`,
  },
]);

export const medTr = style([
  layout.flexBetweenCenter,
  {
    padding: '0.8rem 0',
    borderBottom: `2px dotted ${colors.grey09}`,
  },
]);

export const medTh = style([
  fonts.body04,
  {
    flex: 1,
    textAlign: 'center',
    color: colors.black01,
  },
]);

export const medThEmpty = style([
  medTh,
  {
    visibility: 'hidden',
  },
]);

export const medTd = style([
  fonts.body04,
  {
    flex: 1,
    textAlign: 'center',
    color: colors.black01,
  },
]);

export const medTdO = style([
  medTd,
  {
    color: colors.green02,
  },
]);

export const medTdX = style([
  medTd,
  {
    color: colors.pink01,
  },
]);

export const medNote = style([
  fonts.body05,
  {
    width: CONTENT_WIDTH,
    marginTop: '1rem',
    textAlign: 'left',
  },
]);

export const mealRow = style([
  layout.flexBetweenCenter,
  {
    width: '100%',
    gap: '1rem',
    flexWrap: 'nowrap',
  },
]);

export const donutBox = style([
  layout.flexCenter,
  {
    position: 'relative',
    width: '8.8rem',
    height: '8.8rem',
    flex: '0 0 8.8rem',
  },
]);

export const donutCenter = style([
  fonts.body01,
  {
    position: 'absolute',
  },
]);

export const donutPercent = style([
  fonts.caption02,
  {
    position: 'absolute',
    fontWeight: 600,
    zIndex: 1,
    pointerEvents: 'none',
    fontSize: '11px',
  },
]);

export const legend = style([
  layout.flexColumn,
  {
    gap: '0.5rem',
    position: 'absolute',
    top: '1.2rem',
    right: '1.2rem',
    alignItems: 'flex-end',
  },
]);

export const legendItem = style([
  layout.flexCenter,
  {
    gap: '0.5rem',
  },
]);

export const legendDot = style([
  {
    width: '0.8rem',
    height: '0.8rem',
    borderRadius: '50%',
  },
]);

export const legendDotOk = style([legendDot, { backgroundColor: colors.green02 }]);

export const legendDotNo = style([legendDot, { backgroundColor: colors.pink01 }]);

export const statRow = style([
  layout.flexBetweenCenter,
  {
    width: '100%',
    gap: '1rem',
  },
]);

export const statCard = style([
  layout.flexColumnCenter,
  {
    flex: 1,
    backgroundColor: colors.grey12,
    borderRadius: '0.8rem',
    padding: '1.2rem',
  },
]);

export const statLabel = style([
  fonts.body01,
  {
    color: colors.black01,
    opacity: 0.8,
    marginBottom: '0.4rem',
    textAlign: 'center',
  },
]);

export const statValue = style([
  fonts.body02,
  {
    textAlign: 'center',
  },
]);

export const completedBox = style([
  layout.flexColumn,
  {
    width: '100%',
    backgroundColor: colors.grey12,
    borderRadius: '8px',
    padding: '1.2rem',
    marginTop: '1rem',
    gap: '0.8rem',
  },
]);

export const completedHeader = style([
  layout.flexBetweenCenter,
  fonts.body02,
  {
    width: '100%',
  },
]);

export const completedList = style([
  layout.flexColumn,
  {
    gap: '0.8rem',
  },
]);

export const completedItem = style([
  layout.flexAlignCenter,
  fonts.body03,
  {
    gap: '0.6rem',
  },
]);

export const chevronBtn = style([
  fonts.body01,
  {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    lineHeight: 1,
  },
]);

export const reminList = style([layout.flexColumn, { gap: '1.2rem', margin: '2rem 0' }]);

export const reminCard = style([
  layout.flexColumn,
  {
    width: CONTENT_WIDTH,
    backgroundColor: colors.yellow01,
    borderRadius: '12px',
    padding: '2rem',
    gap: '0.8rem',
    cursor: 'pointer',
  },
]);

export const reminDate = style([fonts.body02, layout.flexAlignCenter, { gap: '0.6rem' }]);

export const reminQuote = style([fonts.body05]);

export const moreLink = style([fonts.caption02, { textAlign: 'right' }]);

export const gameChart = style([
  {
    width: '100%',
    height: '18rem',
  },
]);

export const gameSubtitle = style([
  fonts.body02,
  {
    textAlign: 'center',
    marginBottom: '0.25rem',
  },
]);

export const gameLegend = style([
  layout.flexAlignCenter,
  {
    gap: '1rem',
    margin: '0.5rem 0 0.5rem auto',
  },
]);

export const gameLegendItem = style([layout.flexAlignCenter, { gap: '0.4rem' }]);

export const gameDotA = style([
  {
    width: '0.7rem',
    height: '0.7rem',
    borderRadius: '50%',
    backgroundColor: colors.yellow04,
  },
]);

export const gameDotB = style([
  {
    width: '0.7rem',
    height: '0.7rem',
    borderRadius: '50%',
    backgroundColor: colors.blue04,
  },
]);

export const gameCards = style([
  layout.flexBetweenCenter,
  { width: '100%', gap: '1rem', marginTop: '1rem' },
]);

export const gameCard = style([
  layout.flexColumn,
  {
    flex: 1,
    backgroundColor: 'transparent',
    borderRadius: '10px',
    padding: '1rem 3rem',
    gap: '0.6rem',
    border: `2px solid ${colors.blue02}`,
  },
]);

export const gameCardTitle = style([
  fonts.body03,
  {
    whiteSpace: 'nowrap',
  },
]);
export const gameCardMeta = style([fonts.caption02]);

export const modalOverlay = style([
  layout.flexCenter,
  {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
    zIndex: zIndex.overlay,
  },
]);

export const modalPanel = style([
  layout.flexColumn,
  {
    width: '96%',
    maxWidth: CONTENT_WIDTH,
    backgroundColor: colors.grey12,
    borderRadius: '16px',
    padding: '2rem',
    gap: '1.2rem',
    border: `4px solid ${colors.yellow04}`,
  },
]);

export const modalHeader = style([layout.flexAlignCenter, fonts.body01, { gap: '0.6rem' }]);

export const quoteBlock = style([fonts.body05, { whiteSpace: 'pre-line' }]);
