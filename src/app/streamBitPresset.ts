import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

export const streamBitPreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: '#eeeeff',
      100: '#e0e1ff',
      200: '#c5c7ff',
      300: '#9a9df2',
      400: '#626AE7',
      500: '#4f56e0',
      600: '#4147d4',
      700: '#383ebf',
      800: '#2f34a6',
      900: '#252a8c',
      950: '#1c207d'
    },
    secondary: {
      50: '#ffffff',
      100: '#ffffff',
      200: '#ffffff',
      300: '#f8f9fa',
      400: '#ffffff',
      500: '#e9ecef',
      600: '#dee2e6',
      700: '#ced4da',
      800: '#adb5bd',
      900: '#6c757d',
      950: '#343a40'
    },
    success: {
      50: '#e8f5e9',
      100: '#c8e6c9',
      200: '#a5d6a7',
      300: '#81c784',
      400: '#66bb6a',
      500: '#4caf50',
      600: '#43a047',
      700: '#388e3c',
      800: '#2e7d32',
      900: '#1b5e20',
      950: '#0d3010'
    },
    background: {
      default: '##171A1F',
      paper: '#141414'
    },
    text: {
      primary: '#ffffff',
      secondary: '#94a3b8'
    },
    colorScheme: {
      light: {
        primary: {
          color: '#626AE7',
          inverseColor: '#ffffff',
          hoverColor: '#9a9df2',
          activeColor: '#4f56e0'
        },
        secondary: {
          color: '#ffffff',
          inverseColor: '#0A0A0A',
          hoverColor: '#f8f9fa',
          activeColor: '#e9ecef'
        },
        success: {
          color: '#66bb6a',
          inverseColor: '#ffffff',
          hoverColor: '#81c784',
          activeColor: '#4caf50'
        }
      },
      dark: {
        primary: {
          color: '#626AE7',
          inverseColor: '#ffffff',
          hoverColor: '#9a9df2',
          activeColor: '#4f56e0'
        },
        secondary: {
          color: '#ffffff',
          inverseColor: '#0A0A0A',
          hoverColor: '#f8f9fa',
          activeColor: '#e9ecef'
        },
        success: {
          color: '#66bb6a',
          inverseColor: '#ffffff',
          hoverColor: '#81c784',
          activeColor: '#4caf50'
        }
      }
    }
  }
});
