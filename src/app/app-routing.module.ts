import {NotfoundComponent} from './shared/components/404/not-found.component';
import {Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,

    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./products/product.module').then(m => m.ProductModule)
      },
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }


];

