import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  productForm: FormGroup;

  subCategories: string[] = [
    'Phone',
    'Laptop',
    'Watch'
  ]

  constructor(
    private _productService: ProductService,
    private _formBuilder: FormBuilder
  ) {
    this.productForm = this._formBuilder.group({
      nomProduct: ''
    });
  }

  onFormSubmit(): void {
    if (this.productForm.valid) {
      alert('is Valide')
    }
  }
}
