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
      },
      {
        path: 'reviews',
        loadChildren: () => import('./core/reviews/reviews.routes').then(m => m.reviewsRoutes)
      },
      {
        path: 'discussions',
        loadChildren: () => import('./core/discussions/discussions.routes').then(m => m.discussionsRoutes)
      },
      {
        path: 'scores',
        loadChildren: () => import('./core/scores/scores.routes').then(m => m.scoresRoutes)
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
