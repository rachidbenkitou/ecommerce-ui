import { NotImplementedComponent } from './containers/501/not-implemented';
import { ForbiddenComponent } from './containers/403/forbidden.component';
import { NotfoundComponent } from './../shared/components/404/not-found.component';
import { Routes } from '@angular/router';

export const AuthenticationRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotfoundComponent
      },
      {
        path: '403',
        component: ForbiddenComponent
      },
      {
        path: '501',
        component: NotImplementedComponent
      },
    ]
  }
];

