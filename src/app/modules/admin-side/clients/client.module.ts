import {NgModule} from '@angular/core';
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CommonModule} from "@angular/common";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {FeatherModule} from "angular-feather";
import {ReactiveFormsModule} from "@angular/forms";
import {NgSelectModule} from "@ng-select/ng-select";
import {SharedComponentsModule} from "../shared-components/shared-components.module";
import {ClientRoutes} from "./client-routing.module";
import {ClientListComponent} from "./compoentns/client-list/client-list.component";
import {ClientSearchComponent} from "./compoentns/client-search/client-search.component";
import { ClientPageComponent } from './containers/client-page/client-page.component';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientSearchComponent,
    ClientPageComponent,
  ],
  exports: [],
  imports: [
    RouterModule.forChild(ClientRoutes),
    NgbModule,
    CommonModule,
    ReactiveFormsModule,
    NgSelectModule,
    FeatherModule,
    NgxDatatableModule,
    SharedComponentsModule,
  ]
})
export class ClientModule {
}
