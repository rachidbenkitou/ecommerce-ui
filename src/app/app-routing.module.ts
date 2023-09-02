import {NotfoundComponent} from './shared/components/404/not-found.component';
import {Routes} from '@angular/router';
import {FullComponent} from './layouts/full/full.component';
import {UploadMultiImagesComponent} from "./shared-components/images/upload-multi-images/upload-multi-images.component";

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
      {
        path: 'categories',
        loadChildren: () => import('./categories/category.module').then(m => m.CategoryModule)
      },
      {
        path: 'test',
        component: UploadMultiImagesComponent
      },
    ]
  },
  {
    path: '**',
    component: NotfoundComponent
  }


];

