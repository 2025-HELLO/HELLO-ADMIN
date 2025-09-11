import { style } from '@vanilla-extract/css';
import { colors, fonts, layout } from '@styles/token';

export const wrapper = style({ width: '30rem', marginTop: '1rem' });

export const box = style([
  layout.flexCenter,
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

export const icon = style([fonts.caption02]);

export const text = style([fonts.caption02, { color: colors.grey09 }]);
