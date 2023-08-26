import {NgModule} from '@angular/core';
import {ProductPageComponent} from './containers/product-page/product-page.component';
import {RouterModule} from "@angular/router";
import {productRoutes} from "./products-routing.module";
import { ProductAddEditComponent } from './components/product-add-edit/product-add-edit.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from "primeng/button";
import {ToolbarModule} from "primeng/toolbar";
import {ToastModule} from "primeng/toast";
import {FileUploadModule} from "primeng/fileupload";
import {RippleModule} from "primeng/ripple";


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
    TableModule,
    ButtonModule,
    ToolbarModule,
    ToastModule,
    FileUploadModule,
    RippleModule

  ]
})
export class ProductsModule {
}
