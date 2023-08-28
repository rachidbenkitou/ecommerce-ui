import {Routes} from '@angular/router';
import {ProductSearchComponent} from "./components/product-search/product-search.component";
import {ProductPageComponent} from "./containers/product-page/product-page.component";


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