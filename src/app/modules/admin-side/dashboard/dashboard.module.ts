import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard.routing';
import { CountToModule } from 'angular-count-to';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(DashboardRoutes),
    FeatherModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    CountToModule,
    SharedModule
  ]
})
export class DashboardModule { }
