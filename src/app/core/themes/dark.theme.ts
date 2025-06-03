import { Theme } from './theme.interface';

export const darkTheme: Theme = {
  name: 'dark',
  properties: {
    '--background-default': '#171A1F',
    '--section-content-default': '#000000',
    '--background-paper': '#141414',
    '--text-primary': '#ffffff',
    '--text-secondary': '#94a3b8',

    '--primary-50': '#eeeeff',
    '--primary-100': '#e0e1ff',
    '--primary-200': '#c5c7ff',
    '--primary-300': '#9a9df2',
    '--primary-400': '#626AE7',
    '--primary-500': '#4f56e0',
    '--primary-600': '#4147d4',
    '--primary-700': '#383ebf',
    '--primary-800': '#2f34a6',
    '--primary-900': '#252a8c',
    '--primary-950': '#1c207d',

    '--success': '#4caf50',
    '--warning': '#ff9800',
    '--error': '#f44336',
    '--info': '#2196f3',

    '--navbar-bg': '#141414',
    '--card-bg': '#1a1a1a',
    '--button-bg': '#626AE7',
    '--input-bg': '#1a1a1a',

    '--font-family': '"Calibri", sans-serif',
    '--font-size-xs': '0.75rem',
    '--font-size-sm': '0.875rem',
    '--font-size-md': '1rem',
    '--font-size-lg': '1.125rem',
    '--font-size-xl': '1.25rem',

    '--spacing-xs': '0.5rem',
    '--spacing-sm': '1rem',
    '--spacing-md': '1.5rem',
    '--spacing-lg': '2rem',
    '--spacing-xl': '3rem',

    '--border-radius-sm': '0.25rem',
    '--border-radius-md': '0.5rem',
    '--border-radius-lg': '1rem',
    '--border-radius-full': '9999px'
  }
};
