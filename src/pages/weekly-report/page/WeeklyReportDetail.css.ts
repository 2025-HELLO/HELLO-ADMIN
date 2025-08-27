import { style } from '@vanilla-extract/css';
import { styleVariants } from '@vanilla-extract/css';

import { colors, fonts } from '@/shared/styles/token';
import { layout } from '@/shared/styles/token/layout.css';

export const CONTENT_WIDTH = '355px';

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
    height: '136px',
    backgroundColor: colors.grey11,
    borderRadius: '8px',
    padding: '16px',
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
  layout.flexColumn,
  {
    gap: '0.25rem',
    alignItems: 'center',
    textAlign: 'center',
  },
]);

export const section = style([
  layout.flexColumn,
  {
    width: CONTENT_WIDTH,
    backgroundColor: colors.grey11,
    borderRadius: '8px',
    padding: '16px',
    gap: '0.75rem',
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
  layout.flexColumn,
  {
    alignItems: 'center',
    gap: '0.25rem',
  },
]);

export const dot = style([
  {
    width: '12px',
    height: '12px',
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
    padding: '16px',
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

export const medSelectLabel = style([
  {
    display: 'flex',
    alignItems: 'center',
  },
]);

export const visuallyHidden = style({
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: 0,
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
});

export const medSelect = style([
  {
    padding: '4px 8px',
    borderRadius: '4px',
    border: `1px solid ${colors.grey09}`,
    fontSize: '13px',
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
  {
    padding: '8px 0',
    borderBottom: `2px dotted ${colors.grey09}`,
    fontWeight: 600,
    fontSize: '13px',
  },
]);

export const medTr = style([
  layout.flexBetweenCenter,
  {
    padding: '8px 0',
    borderBottom: `2px dotted ${colors.grey09}`,
  },
]);

export const medTh = style([
  {
    flex: 1,
    textAlign: 'center',
    fontWeight: 600,
    fontSize: '12px',
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
  {
    flex: 1,
    textAlign: 'center',
    fontSize: '12px',
    color: colors.black01,
  },
]);

export const medTdO = style([
  medTd,
  {
    color: colors.green02,
    fontWeight: 600,
  },
]);

export const medTdX = style([
  medTd,
  {
    color: colors.pink01,
    fontWeight: 600,
  },
]);
