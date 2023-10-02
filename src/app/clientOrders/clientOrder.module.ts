import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FeatherModule} from "angular-feather";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {ClientOrderRoutes} from "./clientOrder-routing.module";
import {ClientOrderListComponent} from './components/client-order-list/client-order-list.component';
import {ClientOrderSearchComponent} from './components/client-order-search/client-order-search.component';
import { ClientOrderPageComponent } from './containers/client-order-page/client-order-page.component';
import { SaleListComponent } from './components/sale-list/sale-list.component';
import { SaleSearchComponent } from './components/sale-search/sale-search.component';
import { SaleDetailsListComponent } from './components/sale-details-list/sale-details-list.component';
import {ClientOrderDetailsListComponent} from "./components/client-order-details-list/client-order-details-list.component";


@NgModule({
  declarations: [

    ClientOrderListComponent,
    ClientOrderSearchComponent,
    ClientOrderPageComponent,
    SaleListComponent,
    SaleSearchComponent,
    ClientOrderDetailsListComponent,
    SaleDetailsListComponent
  ],
  exports: [],
  imports: [
    RouterModule.forChild(ClientOrderRoutes),
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FeatherModule,
    NgxDatatableModule,
    SharedComponentsModule,
  ]
})
export class ClientOrderModule {
}
