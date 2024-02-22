import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Product} from "../../models/product";
import {Category} from "../../../categories/models/category";
import {CategoryService} from "../../../categories/services/category.service";

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

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
      categoryId: [],
      visibility: [],
    });
  }

  public getProducts(id?: number, name?: string, categoryId?: number, visibility?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-product-form') as HTMLInputElement);
    submitButton.disabled = true
    this.productService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.productService.findProduct(id, name, categoryId, visibility).subscribe(
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

  getCategoryList() {
    //this.loadingState.emit(true)
    this.productService.changeLoadingState(true)
    this.categoryService.findCategories().subscribe(
      (response: any[]) => {
        this.categoryList = response;
        //this.loadingState.emit(false)
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
      this?.productForm.value?.categoryId,
      this?.productForm.value?.visibility)
  }

  ngOnInit(): void {
    this.initForm()
    this.getProducts()
    this.getCategoryList()
  }

}
