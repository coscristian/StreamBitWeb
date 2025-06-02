import {Routes} from '@angular/router';
import {MainLayoutComponent} from './core/layouts/main-layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'home'
      },
      {
        path: 'home',
        loadChildren: () => import('./core/home/home.routes').then(m => m.homeRoutes)
      },
      {
        path: 'content',
        loadChildren: () => import('./core/content/content.routes').then(m => m.contentRoutes)
      }
    ]
  },
  {
    path: 'register',
    loadChildren: () => import('./core/auth/auth.routes').then(m => m.registerRoutes)
  },
  {
    path: 'login',
    loadChildren: () => import('./core/auth/auth.routes').then(m => m.loginRoutes)
  },
];
