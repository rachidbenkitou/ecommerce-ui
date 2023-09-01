import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../products/models/product";
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {CategoryService} from "../../services/category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Category} from "../../models/category";
import {ProductService} from "../../../products/services/product.service";

@Component({
  selector: 'app-products-of-a-category',
  templateUrl: './products-of-a-category.component.html',
  styleUrls: ['./products-of-a-category.component.scss']
})
export class ProductsOfACategoryComponent implements OnInit {

  @Input() categoryId: number;

  @Output() loadingState: EventEmitter<any> = new EventEmitter();

  loading: boolean = true

  public isCollapsed1 = false;

  productForm!: UntypedFormGroup;

  productList: Product[] = [];

  categoryList: Category[] = [];

  visibilityList: any[] = [
    {id: 1, name: "visible"},
    {id: 2, name: "invisible"},
  ]

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService,
    private categoryService: CategoryService
  ) {
    productService.reload.subscribe(ev => {
      this.reset()
    })
  }


  initForm() {
    this.productForm = this.formBuilder.group({
      id: [],
      name: [],
      visibility: [],
    });
  }

  public getProducts(id?: number, name?: string, categoryId?: number, visibility?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-product-form') as HTMLInputElement);
    submitButton.disabled = true
    this.productService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.productService.findProduct(id, name, this.categoryId, visibility).subscribe(
      (response: any[]) => {
        this.productList = response;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        submitButton.disabled = false
        this.productService.changeLoadingState(false)
      },
      () => {
        submitButton.disabled = false
        this.loading = false
        this.productService.changeLoadingState(false)

      }
    );
  }


  reset(): void {
    this.productForm.reset()
    this.getProducts()
  }

  search(): void {
    this.getProducts(
      this?.productForm.value?.id,
      this?.productForm.value?.name,
      null,
      this?.productForm.value?.visibility)
  }

  ngOnInit(): void {
    this.initForm()
    this.getProducts()
  }

}
