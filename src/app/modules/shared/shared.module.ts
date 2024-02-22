import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeatherModule } from 'angular-feather';
import { PhonePipe } from './pipes/phone.pipe';
import { ConfirmModalComponent } from './components/confirm-modal/confirm-modal.component';
import { LoadingComponent } from './components/loading/loading.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplaceLineBreaksPipe } from './pipes/replace-line-breaks.pipe';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { ChartLineComponent } from './components/chart-line/chart-line.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { ChartBarComponent } from './components/chart-bar/chart-bar.component';
import { StatisticComponent } from './components/statistic/statistic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SafePipe } from './pipes/safe.pipe';


@NgModule({
  declarations: [
    LoadingComponent,
    ReplaceLineBreaksPipe,
    PhonePipe,
    FilterButtonComponent,
    ChartLineComponent,
    ChartBarComponent,
    StatisticComponent,
    SafePipe
  ],
  exports: [
    LoadingComponent,
    FilterButtonComponent,
    ReplaceLineBreaksPipe,
    PhonePipe,
    ChartLineComponent,
    ChartBarComponent,
    StatisticComponent,
    SafePipe
  ],
  imports: [
    CommonModule,
    FeatherModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    NgApexchartsModule,
    NgbModule

  ],
  providers: []

})
export class SharedModule { }
