import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ProductRoutes} from "./product-routing.module";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {ProductDetailsComponent} from "./components/product-details/product-details.component";
import {ProductListComponent} from "./components/product-list/product-list.component";
import {ProductSearchComponent} from "./components/product-search/product-search.component";
import {ProductAddEditComponent} from "./components/product-add-edit/product-add-edit.component";
import {ProductPageComponent} from "./containers/product-page/product-page.component";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FeatherModule} from "angular-feather";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";


@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent,
    ProductSearchComponent,
    ProductAddEditComponent,
    ProductPageComponent
  ],
  imports: [
    RouterModule.forChild(ProductRoutes),
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FeatherModule,
    NgxDatatableModule,
  ]
})
export class ProductModule {
}
