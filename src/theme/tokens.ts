const colors = {
  brand: {
    primary: {
      green1: '#A4CE4E',
      blue1: '#0090DA',
      blue2: '#007ABC',
      blue3: '#0061A0',
    },
    secondary: {
      berry: '#DB0A5B',
      purple: '#5F259F',
      teal: '#00ACA0',
      yellow: '#FFC600',
    },
  },
  neutral: {
    black: '#000000',
    white: '#FFFFFF',
    grayDarkest: '#333333',
    grayDark: '#6E6E6E',
    grayMedium: '#A7A8AA',
    grayLight: '#D9D9D6',
    grayLightest: '#F2F2F2',
    transparent: '#FFFFFF00',
    blackSemiTransparent: '#00000075',
    whiteSemiTransparent: '#FFFFFF75',
  },
} as const;

const typography = {
  family: {
    circularPro: {
      regular: '',
      medium: '',
      bold: '',
      black: '',
    },
    circular: {
      light: '',
      regular: '',
      medium: '',
      bold: '',
    },
    noto: {
      light: '',
      regular: '',
      medium: '',
      semibold: '',
      bold: '',
      extrabold: '',
      black: '',
    },
  },
} as const;

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
} as const;

const borders = {
  none: 0,
  thin: 1,
  thick: 2,
  heavy: 3,
} as const;

const radii = {
  sm: 4,
  md: 8,
  lg: 16,
} as const;

const elevation = {
  none: 0,
  low: 2,
  medium: 6,
  high: 12,
} as const;

export type ThemeTokens = typeof tokens;
export const tokens = {
  colors,
  typography,
  spacing,
  borders,
  radii,
  elevation,
};
