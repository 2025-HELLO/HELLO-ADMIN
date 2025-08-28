import { style } from '@vanilla-extract/css';
import { styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/shared/styles/token';
import { layout } from '@/shared/styles/token/layout.css';

export const CONTENT_WIDTH = '35.5rem';

export const container = style(layout.flexColumnCenter);

export const title = style([
  fonts.title03,
  {
    width: CONTENT_WIDTH,
    margin: '2rem 0',
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
