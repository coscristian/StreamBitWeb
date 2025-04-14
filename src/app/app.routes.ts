import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/home/home.routes').then(m => m.homeRoutes)
  },
  {
    path: 'register',
    loadChildren: () => import('./core/auth/auth.routes').then(m => m.registerRoutes)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.routes').then(m => m.loginRoutes)
  }
];
