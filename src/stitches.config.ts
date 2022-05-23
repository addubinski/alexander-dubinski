import { createStitches } from '@stitches/react';

export const { theme, styled, globalCss } = createStitches({
  theme: {
    colors: {
      blue500: '#2196F3',
      blue500light: '#6EC6FF',
      blue500dark: '#0069C0',
      grey500: '#9E9E9E',
      grey500light: '#CFCFCF',
      grey500dark: '#707070',
      background: '#1B1B1B',
    },
    fonts: {
      roboto: "'Roboto', sans-serif",
    },
  },
});
