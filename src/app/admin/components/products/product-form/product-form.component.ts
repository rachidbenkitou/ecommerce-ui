import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product';
import { SubCategory } from 'src/app/shared/models/subCategory';
import { ProductService } from 'src/app/shared/services/product.service';
import { SubCategoryService } from 'src/app/shared/services/sub-category.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm!: FormGroup;
  subCategories!: SubCategory[];

  constructor(
    private _productService: ProductService,
    private _subCategoryService: SubCategoryService,
    private _formBuilder: FormBuilder,
    private _dialogRef: MatDialogRef<ProductFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Product
  ) {
  }

  ngOnInit(): void {
    this.productForm = this._formBuilder.group({
      id: '',
      name: ['', [Validators.required, Validators.maxLength(50)]],
      description: ['', [Validators.required, Validators.maxLength(100)]],
      price: ['', [Validators.required, Validators.min(0)]],
      quantity: ['1', [Validators.required, Validators.min(1)]],
      subCategory: ['', [Validators.required]]

    });
    this.productForm.patchValue(this.data);
    this.getSubCategories();
  }

  getSubCategories() {
    this._subCategoryService.getSubCategories().subscribe({
      next: (data) => {
        this.subCategories = data
      },
      error: console.log

    });
  }

  addorUpdateProduct(alertMessage: string): void {
    if (this.productForm.valid) {
      this._productService.updateProduct(this.productForm.value).subscribe({
        next: (val: any) => {
          this._dialogRef.close(true)
          alert(alertMessage)
        },
        error: (err: any) => {
          console.log(err)
        }
      });
    }
  }

  addProduct(): void {
    this.addorUpdateProduct('Product is added successfully!')
  }
  updateProduct(): void {
    this.addorUpdateProduct('Product is updated successfully!')

  }

  //This function helps to add or update a product
  onFormSubmit(): void {
    if (this.data) {
      this.updateProduct();
    } else {
      this.addProduct();
    }
  }
}
