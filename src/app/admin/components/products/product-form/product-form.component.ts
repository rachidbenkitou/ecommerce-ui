import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit{
  productForm: FormGroup;

  subCategories: string[] = [
    'Phone',
    'Laptop',
    'Watch'
  ]

  constructor(
    private _productService: ProductService,
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any
  ) {
    this.productForm = this._formBuilder.group({
      nomProduct: ''
    });
  }
  
  ngOnInit(): void {
    this.productForm.patchValue(this.data)
  }

  onFormSubmit(): void {
    if (this.productForm.valid) {
      alert('The product is added successfully!')
      this._dialogRef.close(true)
    }
  }
}
