import {NotfoundComponent} from './modules/admin-side/shared/components/404/not-found.component';
import {Routes} from '@angular/router';
import {FullComponent} from './modules/admin-side/layouts/full/full.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,

    children: [
      {path: '', redirectTo: '/dashboard', pathMatch: 'full'},

      {
        path: 'dashboard',
        loadChildren: () => import('./modules/admin-side/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./modules/admin-side/products/product.module').then(m => m.ProductModule)
      },
      {
        path: 'categories',
        loadChildren: () => import('./modules/admin-side/categories/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'clientOrders',
        loadChildren: () => import('./modules/admin-side/clientOrders/clientOrder.module').then(m => m.ClientOrderModule)
      },
      {
        path: 'clients',
        loadChildren: () => import('./modules/admin-side/clients/client.module').then(m => m.ClientModule)
      },
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }


];

