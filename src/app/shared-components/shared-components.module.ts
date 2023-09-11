import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgModule} from '@angular/core';
import {PhonePipe} from "./pipe/phone.pipe";
import {EditViewProfilePictureComponent} from './profilePicture/edit-view-profile-picture/edit-view-profile-picture.component';
import {CommonModule} from "@angular/common";
import {AlertInfoComponent} from './alert-info/alert-info.component';
import {FeatherModule} from "angular-feather";
import {JsonFormatPipePipe} from "./pipe/jsonFormat.pipe";
import {NgxDatatableModule} from "@swimlane/ngx-datatable";
import {TranslateModule} from "@ngx-translate/core";
import {ProductListComponent} from "./products/product-list/product-list.component";
import { UploadMultiImagesComponent } from './images/upload-multi-images/upload-multi-images.component';


@NgModule({
  declarations: [
    PhonePipe,
    JsonFormatPipePipe,
    EditViewProfilePictureComponent,
    AlertInfoComponent,
    JsonFormatPipePipe,
    ProductListComponent,
    UploadMultiImagesComponent
  ],
    exports: [
        PhonePipe,
        JsonFormatPipePipe,
        AlertInfoComponent,
        JsonFormatPipePipe,
        ProductListComponent,
        UploadMultiImagesComponent,
    ],

  imports: [
    CommonModule,
    RouterModule,
    FeatherModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbModule,
    NgSelectModule,
    TranslateModule,
  ]
})
export class SharedComponentsModule {
}
