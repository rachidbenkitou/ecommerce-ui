import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "./products.component";

export const productRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [
  ],
  exports: [RouterModule]
})
export class ProductsRoutingModule {
}
