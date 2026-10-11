import { Route } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { ContentDetailComponent } from './components/content-detail/content-detail.component';

export const contentRoutes: Route[] = [
  {
    path: '',
    component: ContentComponent
  },
  {
    path: ':id',
    component: ContentDetailComponent
  }
];
