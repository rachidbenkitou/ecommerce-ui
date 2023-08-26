import {NgModule} from '@angular/core';
import {ProductPageComponent} from './containers/product-page/product-page.component';
import {RouterModule} from "@angular/router";
import {productRoutes} from "./products-routing.module";
import { ProductAddEditComponent } from './components/product-add-edit/product-add-edit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';


@NgModule({
  declarations: [
    ProductPageComponent,
    ProductAddEditComponent,
    ProductDetailsComponent,
    ProductListComponent,
    ProductSearchComponent
  ],
  imports: [
    RouterModule.forChild(productRoutes),

  ]
})
export class ProductsModule {
}
