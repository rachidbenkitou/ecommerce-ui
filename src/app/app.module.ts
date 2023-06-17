import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatIconButton} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ProductListComponent } from './shared/components/products/product-list/product-list.component';
import { ProductFormComponent } from './shared/components/products/product-form/product-form.component';
import { StatisticsComponent } from './admin/components/statistics/statistics.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { CategoryFormComponent } from './shared/components/categories/category-form/category-form.component';
import { CategoryListComponent } from './shared/components/categories/category-list/category-list.component';
import { SubCategoryListComponent } from './shared/components/subCategories/sub-category-list/sub-category-list.component';
import { SubCategoryFormComponent } from './shared/components/subCategories/sub-category-form/sub-category-form.component';








@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    DashboardComponent,
    ProductFormComponent,
    StatisticsComponent,
    CategoryFormComponent,
    CategoryListComponent,
    SubCategoryListComponent,
    SubCategoryFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
