import { extendTheme } from 'native-base';

export const DARK_THEME = extendTheme({
  colors: {
    primary: {
      500: '#369af2',
      600: '#1b1d26',
      700: '#1b1d26',
    },
    secondary: { 500: '#141414' },
    text: { 500: '#f4f4f4' },
  },
  config: {
    initialColorMode: 'dark',
  },
});
