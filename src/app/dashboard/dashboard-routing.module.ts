import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from "../products/products.component";

export const dashboardRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [],
  exports: [RouterModule]
})
export class DashboardsRoutingModule {
}
