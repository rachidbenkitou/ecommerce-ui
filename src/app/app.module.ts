import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './shared/components/products/product-list/product-list.component';
import {AdminPanelComponent} from './admin/components/admin-panel/admin-panel.component';
import {TagModule} from "primeng/tag";


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminPanelComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    TagModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
