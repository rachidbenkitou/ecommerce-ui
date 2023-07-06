import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { ToastModule } from 'primeng/toast';
import { ToolbarModule } from 'primeng/toolbar';



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
import { ListProductComponent } from './admin/shared/components/list-product/list-product.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    AdminPanelComponent,
    ListProductComponent,
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
    ToastModule,
    ToolbarModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
