import {NgSelectModule} from '@ng-select/ng-select';
import {DataService} from './shared/services/data.service';
import {HttpInterceptorInterceptor} from './shared/services/http-interceptor.interceptor';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule, registerLocaleData} from '@angular/common';
import {LOCALE_ID, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {FullComponent} from './layouts/full/full.component';
import {BlankComponent} from './layouts/blank/blank.component';

import {VerticalNavigationComponent} from './shared/vertical-header/vertical-navigation.component';
import {VerticalSidebarComponent} from './shared/vertical-sidebar/vertical-sidebar.component';
import {BreadcrumbComponent} from './shared/breadcrumb/breadcrumb.component';
import {HorizontalNavigationComponent} from './shared/horizontal-header/horizontal-navigation.component';
import {HorizontalSidebarComponent} from './shared/horizontal-sidebar/horizontal-sidebar.component';


import {Approutes} from './app-routing.module';
import {AppComponent} from './app.component';
import {SpinnerComponent} from './shared/spinner.component';

// import { AuthGuard } from './auth.guard';
import {PERFECT_SCROLLBAR_CONFIG, PerfectScrollbarConfigInterface, PerfectScrollbarModule} from 'ngx-perfect-scrollbar';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {ToastrModule} from 'ngx-toastr';

import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";

import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import localeFr from '@angular/common/locales/fr';
import {NgxDatatableModule} from "@swimlane/ngx-datatable";

registerLocaleData(localeFr, 'fr');


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 2,
  wheelPropagation: true,
  minScrollbarLength: 20
};


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    FullComponent,
    BlankComponent,
    VerticalNavigationComponent,
    BreadcrumbComponent,
    VerticalSidebarComponent,
    HorizontalNavigationComponent,
    HorizontalSidebarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    FeatherModule,
    FeatherModule.pick(allIcons),
    RouterModule.forRoot(Approutes, {useHash: true}),
    PerfectScrollbarModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),

    NgSelectModule,
    // calendar par Dk
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory,
    }),
    NgxDatatableModule,
    //ProspectionModule,

  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorInterceptor,
      multi: true,
    },
    // change calendar to fr par Dk
    {provide: LOCALE_ID, useValue: 'fr-FR'},
    //AuthGuard,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
