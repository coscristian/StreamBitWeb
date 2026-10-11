import { Theme } from './theme.interface';

export const lightTheme: Theme = {
  name: 'light',
  properties: {
    '--background-default': '#F5F6F8',
    '--section-content-default': '#EEF0F4',
    '--background-paper': '#ffffff',
    '--text-primary': '#16181D',
    '--text-secondary': '#4A5568',
    '--text-muted': '#6B7280',

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
    '--live': '#D32F2F',
    '--accent-rating': '#C99212',

    '--navbar-bg': '#ffffff',
    '--sidebar-bg': '#ffffff',
    '--header-bg': '#F5F6F8',
    '--card-bg': '#ffffff',
    '--button-bg': '#626AE7',
    '--input-bg': '#ffffff',
    '--surface-elevated': '#F8F9FB',
    '--border-default': '#DDE1E8',
    '--border-subtle': '#E8EBEE',
    '--overlay': 'rgba(16, 18, 22, 0.45)',
    '--shadow-sm': '0 1px 2px rgba(22, 24, 29, 0.08)',
    '--focus-ring': '#626AE7',

    '--font-family': '"Archivo", "Calibri", sans-serif',
    '--font-size-xs': '0.75rem',
    '--font-size-sm': '0.875rem',
    '--font-size-md': '1rem',
    '--font-size-lg': '1.125rem',
    '--font-size-xl': '1.25rem',
    '--font-size-2xl': '1.5rem',
    '--font-size-3xl': '2rem',

    '--spacing-xs': '0.5rem',
    '--spacing-sm': '1rem',
    '--spacing-md': '1.5rem',
    '--spacing-lg': '2rem',
    '--spacing-xl': '3rem',
    '--spacing-2xl': '4rem',

    '--border-radius-sm': '0.25rem',
    '--border-radius-md': '0.5rem',
    '--border-radius-lg': '0.75rem',
    '--border-radius-full': '9999px'
  }
};
