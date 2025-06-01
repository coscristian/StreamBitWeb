import {Route} from '@angular/router';
import {HomeComponent} from './components/home.component';

export const homeRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'content',
        loadChildren: () => import('../content/content.routes').then(m => m.contentRoutes)
      }
    ]
  }
]
