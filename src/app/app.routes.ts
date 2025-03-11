import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'register',
    loadChildren: () => import('./core/auth/auth.routes').then(m => m.registerRoutes)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.routes').then(m => m.loginRoutes)
  }
];
