import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {HttpErrorResponse} from "@angular/common/http";

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

  productList: any[] = [];

  categoryList: any[] = [];

  visibilityList: any[] = [
    {id: 1, name: "visible"},
    {id: 2, name: "invisible"},
  ]

  constructor(
    private formBuilder: UntypedFormBuilder,
    private productService: ProductService
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

  reset() {
    this.getProducts()
    this.productForm.reset()
  }

  public getProducts(id?: number, name?: string, categoryId?: number, visibility?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-discount-coupon-form') as HTMLInputElement);
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

  ngOnInit(): void {
    this.initForm()
  }

}
