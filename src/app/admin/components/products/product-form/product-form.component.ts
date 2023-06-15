import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
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
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
    this.productForm = this._formBuilder.group({
      id: '',
      name: '',
      description: '',
      price: '',
      quantity: '',
    });
  }

  ngOnInit(): void {
    this.productForm.patchValue(this.data)
  }

  //This Function helps to add or update a product
  onFormSubmit(): void {
    if (this.productForm.valid) {
      this._productService.addProduct(this.productForm.value).subscribe({
        next: (val: any) => {
          this._dialogRef.close(true)
          alert('Product is added successfully!')
        },
        error: (err: any) => {
          console.log(err)
        }
      });
    }
  }
}
