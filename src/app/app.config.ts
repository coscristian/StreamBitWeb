import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {providePrimeNG} from 'primeng/config';
import { streamBitPreset } from './streamBitPresset';
import {provideState, provideStore} from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { authFeatureKey, authReducer } from './core/auth/store/reducers';
import { provideEffects } from '@ngrx/effects';
import * as authEffects from './core/auth/store/effects';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(),
    provideRouter(routes),
    provideStore(),
    provideEffects(authEffects),
    provideAnimationsAsync(),
    provideState(authFeatureKey, authReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: true,
      autoPause: true
    }),
    providePrimeNG({
      theme: {
        preset: streamBitPreset,
        options: {
          darkModeSelector: '.my-app-dark'
        }
      }
    })
  ]
};
