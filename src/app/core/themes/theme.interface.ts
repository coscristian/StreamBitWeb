export interface Theme {
  name: string;
  properties: {
    '--background-default': string;
    '--section-content-default': string;
    '--background-paper': string;
    '--text-primary': string;
    '--text-secondary': string;

    '--primary-50': string;
    '--primary-100': string;
    '--primary-200': string;
    '--primary-300': string;
    '--primary-400': string;
    '--primary-500': string;
    '--primary-600': string;
    '--primary-700': string;
    '--primary-800': string;
    '--primary-900': string;
    '--primary-950': string;

    '--success': string;
    '--warning': string;
    '--error': string;
    '--info': string;

    '--navbar-bg': string;
    '--card-bg': string;
    '--button-bg': string;
    '--input-bg': string;

    '--font-family': string;
    '--font-size-xs': string;
    '--font-size-sm': string;
    '--font-size-md': string;
    '--font-size-lg': string;
    '--font-size-xl': string;

    '--spacing-xs': string;
    '--spacing-sm': string;
    '--spacing-md': string;
    '--spacing-lg': string;
    '--spacing-xl': string;

    '--border-radius-sm': string;
    '--border-radius-md': string;
    '--border-radius-lg': string;
    '--border-radius-full': string;
  }
}
