import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const streamBitPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#e0f7ff',
      100: '#b3ebff',
      200: '#80dfff',
      300: '#4dd3ff',
      400: '#26c9ff',
      500: '#01B4E4',
      600: '#019ecc',
      700: '#0187b3',
      800: '#006b8a',
      900: '#004d61',
      950: '#002f38'
    },
    secondary: {
      50: '#e6f9ec',
      100: '#c6f1d2',
      200: '#a3e8b6',
      300: '#80df9a',
      400: '#62d884',
      500: '#90cea1',
      600: '#65a477',
      700: '#4c8660',
      800: '#3a694b',
      900: '#294d36',
      950: '#1b3525'
    },
    background: {
      default: '#032541',
      paper: '#0d253f'
    },
    text: {
      primary: '#ffffff',
      secondary: '#b0b0b0'
    },
    colorScheme: {
      light: {
        primary: {
          color: '#01B4E4',
          inverseColor: '#ffffff',
          hoverColor: '#26c9ff',
          activeColor: '#019ecc'
        },
        secondary: {
          color: '#90cea1',
          inverseColor: '#ffffff',
          hoverColor: '#62d884',
          activeColor: '#65a477'
        },
        background: {
          default: '#ffffff',
          paper: '#f5f5f5'
        },
        text: {
          primary: '#032541',
          secondary: '#4a4a4a'
        }
      },
      dark: {
        primary: {
          color: '#01B4E4',
          inverseColor: '#032541',
          hoverColor: '#26c9ff',
          activeColor: '#019ecc'
        },
        secondary: {
          color: '#90cea1',
          inverseColor: '#032541',
          hoverColor: '#62d884',
          activeColor: '#65a477'
        },
        background: {
          default: '#032541',
          paper: '#0d253f'
        },
        text: {
          primary: '#ffffff',
          secondary: '#b0b0b0'
        }
      }
    }
  }
});
