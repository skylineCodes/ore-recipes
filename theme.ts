import { extendTheme } from '@chakra-ui/react';

// define tokens
const tokens = {
  grey: {
    0: '#ffffff', // manually adjusted
    10: '#f6f6f6', // manually adjusted
    15: '#6C6C6C', // manually adjusted
    50: '#f0f0f0', // manually adjusted
    100: '#d1d1d3',
    200: '#a2a2a8',
    300: '#74747c',
    400: '#454551',
    500: '#171725',
    600: '#12121e',
    700: '#0e0e16',
    800: '#09090f',
    900: '#050507',
  },
  primary: {
    50: '#526EA0', // Manually adjusted
    100: '#dcdcf0',
    200: '#b9b8e2',
    300: '#9795d3',
    400: '#7471c5',
    500: '#514eb6',
    600: '#413e92',
    700: '#312f6d',
    800: '#201f49',
    900: '#101024',
  },
  secondary: {
    10: '#111111',
    50: '#fefefe',
    100: '#fdfeff',
    200: '#fbfcff',
    300: '#fafbfe',
    400: '#f8f9fe',
    500: '#f6f8fe',
    600: '#c5c6cb',
    700: '#949598',
    800: '#626366',
    900: '#313233',
  },
  home: {
    50: '#1D293F',
  },
  success: {
    100: '#ccf3e0',
    200: '#99e8c2',
    300: '#66dca3',
    400: '#33d185',
    500: '#00c566',
    600: '#009e52',
    700: '#00763d',
    800: '#004f29',
    900: '#002714',
  },
  error: {
    100: '#fad7d7',
    200: '#f5b0ae',
    300: '#ef8886',
    400: '#ea615d',
    500: '#e53935',
    600: '#b72e2a',
    700: '#892220',
    800: '#5c1715',
    900: '#2e0b0b',
  },
  warning: {
    100: '#fef5d0',
    200: '#fdeba1',
    300: '#fce073',
    400: '#fbd644',
    500: '#facc15',
    600: '#c8a311',
    700: '#967a0d',
    800: '#645208',
    900: '#322904',
  },
};

// function that reverses the color palette
const reverseTokens = (tokens: any) => {
  const reversedTokens: any = {};
  Object.entries(tokens).forEach(([key, val]: any) => {
    const keys = Object.keys(val);
    const values = Object.values(val);
    const length = keys.length;
    const reversedObj: any = {};
    for (let i = 0; i < length; i++) {
      reversedObj[keys[i]] = values[length - i - 1];
    }
    reversedTokens[key] = reversedObj;
  });
  return reversedTokens;
};

export const tokensLight = reverseTokens(tokens);

export const themeSettings = () => {
  return {
    colors: tokens,
    fonts: {
      body: 'Plus Jakarta Sans',
      heading: 'Plus Jakarta Sans',
      mono: 'Plus Jakarta Sans',
    },
    fontSizes: {
      xxs: '16px',
      xs: '18px',
      sm: '20px',
      md: '24px',
      lg: '32px',
      xl: '40px',
      '2xl': '48px',
    },
    fontWeights: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      normal: 'normal',
      none: 1,
      shortest: '22px',
      shorter: '26px',
      short: '28px',
      base: '32px',
      tall: '40px',
      taller: '48px',
      tallest: '56px',
    },
    letterSpacings: {
      tighter: '0.005em',
      normal: '0',
    },
    breakpoints: {
      sm: '320px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
  };
};
