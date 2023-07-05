import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductListComponent} from './shared/components/products/product-list/product-list.component';
import {AdminPanelComponent} from './admin/components/admin-panel/admin-panel.component';
import {TagModule} from "primeng/tag";
import {FormsModule} from "@angular/forms";
import {DropdownModule} from "primeng/dropdown";
import {FileUploadModule} from "primeng/fileupload";
import {SliderModule} from "primeng/slider";
import {MultiSelectModule} from "primeng/multiselect";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminPanelComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule,
    TagModule,
    InputTextModule,
    DropdownModule,
    FormsModule,
    FileUploadModule,
    SliderModule,
    MultiSelectModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
