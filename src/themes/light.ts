import { extendTheme } from 'native-base';

export const LIGHT_THEME = extendTheme({
  colors: {
    primary: {
      500: '#369af2',
      600: '#1c82db',
      700: '#3630f2',
    },
    secondary: { 500: '#fff' },
    text: { 500: '#111111' },
  },
  config: {
    initialColorMode: 'light',
  },
});
