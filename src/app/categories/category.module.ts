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

@NgModule({
  declarations: [
    CategoryAddEditComponent,
    CategoryDetailsComponent,
    CategoryListComponent,
    CategorySearchComponent,
    CategoryPageComponent
  ],
  imports: [
    RouterModule.forChild(CategoryRoutes),
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FeatherModule,
    NgxDatatableModule,
  ]
})
export class CategoryModule {
}
