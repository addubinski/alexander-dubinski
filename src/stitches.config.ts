import { createStitches } from '@stitches/react';

const headerWidth = 720;
const headerHeight = 400;

export const { styled, globalCss } = createStitches({
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
    sizes: {
      headerWidth: `${headerWidth}px`,
      headerHeight: `${headerHeight}px`,
      thirdHeaderHeight: `${Math.floor(headerHeight / 3)}px`,
    },
    space: {
      halfHeaderWidth: `${Math.floor(headerWidth / 2)}px`,
      halfHeaderHeight: `${Math.floor(headerHeight / 2)}px`,
    },
    lineHeights: {
      thirdHeaderHeight: `${Math.floor(headerHeight / 3)}px`,
    },
  },
});
