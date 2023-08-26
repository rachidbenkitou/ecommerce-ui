import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products.component";
import {ProductSearchComponent} from "./components/product-search/product-search.component";

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductSearchComponent,
  },
];

@NgModule({
  imports: [
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
