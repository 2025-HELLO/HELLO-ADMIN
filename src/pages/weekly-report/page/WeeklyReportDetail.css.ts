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
    backgroundColor: colors.grey10,
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
    backgroundColor: colors.grey10,
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
