import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {FeatherModule} from "angular-feather";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {CategoryAddEditComponent} from './components/category-add-edit/category-add-edit.component';
import {CategoryDetailsComponent} from './components/category-details/category-details.component';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CategorySearchComponent} from './components/category-search/category-search.component';
import {CategoryPageComponent} from './containers/category-page/category-page.component';
import {CategoryRoutes} from "./category-routing.module";
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import { ProductsOfACategoryComponent } from './components/products-of-a-category/products-of-a-category.component';
import { ImageUploadComponent } from '../shared-components/images/image-upload/image-upload.component';

@NgModule({
  declarations: [
    CategoryAddEditComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    CategorySearchComponent,
    CategoryPageComponent,
    ProductsOfACategoryComponent,
    ImageUploadComponent
  ],
  imports: [
    RouterModule.forChild(CategoryRoutes),
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FeatherModule,
    NgxDatatableModule,
    SharedComponentsModule,
  ]
})
export class CategoryModule {
}
