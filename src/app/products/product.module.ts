import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {ProductRoutes} from "./product-routing.module";

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {ProductListComponent} from "./shared/components/product-list/product-list.component";
import {ProductSearchComponent} from "./product-search/product-search.component";
import {ProductAddEditComponent} from "./product-add-edit/product-add-edit.component";
import {ProductPageComponent} from "./container/product-page/product-page.component";


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
    ]
})
export class ProductModule {
}
