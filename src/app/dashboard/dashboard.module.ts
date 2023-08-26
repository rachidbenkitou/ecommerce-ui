import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ProductPageComponent} from "../products/containers/product-page/product-page.component";
import {dashboardRoutes} from "./dashboard-routing.module";


@NgModule({
  declarations: [
    ProductPageComponent
  ],
  imports: [
    RouterModule.forChild(dashboardRoutes),
  ]
})
export class DashboardModule {
}
