import {Routes} from '@angular/router';
import {ProductSearchComponent} from "./components/product-search/product-search.component";
import {ProductPageComponent} from "./containers/product-page/product-page.component";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductAddEditComponent} from "./components/product-add-edit/product-add-edit.component";


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
      {
        path: 'edit/:id',
        component: ProductAddEditComponent,
        data: {
          title: 'Edit product',
          addAction: false,
        }
      },
      {
        path: 'add',
        component: ProductAddEditComponent,
        data: {
          title: 'Add product',
          addAction: true,
        },

      },

    ],
  },
  {
    path: ':id',
    component: ProductDetailsComponent,
    data: {
      title: 'Product details',
    }
  },

];
