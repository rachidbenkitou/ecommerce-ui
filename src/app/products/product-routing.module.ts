import {Routes} from '@angular/router';
import {ProductSearchComponent} from "./product-search/product-search.component";
import {ProductPageComponent} from "./container/product-page/product-page.component";


export const ProductRoutes: Routes = [
  {
    path: '',
    component: ProductPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        component: ProductSearchComponent,
        data: {
          title: 'Products management',
          page: 'product',
          addButton: true
        },
      },


    ]
  }
];
