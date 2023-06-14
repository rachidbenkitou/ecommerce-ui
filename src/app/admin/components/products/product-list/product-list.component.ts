import { Component } from '@angular/core';
import { ProductFormComponent } from '../product-form/product-form.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  constructor(private _dialog: MatDialog) { }

  openAddEditProductForm(): void {
    this._dialog.open(ProductFormComponent)
  }

}
