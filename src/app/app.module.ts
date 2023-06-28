import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './shared/components/products/product-list/product-list.component';
import { AdminPanelComponent } from './admin/components/admin-panel/admin-panel.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
