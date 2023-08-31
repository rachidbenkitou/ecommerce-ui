import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryService} from "../../../categories/services/category.service";
import {Product} from "../../models/product";
import {Category} from "../../../categories/models/category";

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {


  @Input() data: any
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddEdit: EventEmitter<any> = new EventEmitter();
  productForm!: UntypedFormGroup;
  loadingStates: boolean = false
  loadingCategory: boolean = false
  sppinerDeleteDisplaying: boolean = false
  product: Product
  categoryies: Category[] = [];
  titre: any
  buttonName: string = 'Enregistrer'
  productId: number;

  constructor(private formBuilder: UntypedFormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService,
              private modalService: NgbModal,
              private dataService: DataService,
              private toastr: ToastrService,) {
  }

  initForm() {
    this.productForm = this.formBuilder.group({
      id: [,],
      name: [, Validators.required],
      categoryId: [, Validators.required],
      quantity: [, Validators.required],
      price: [, Validators.required],
      comparePrice: [,],
      visibility: ["visible", Validators.required],
      description: [],
    })
  }

  OncloseModal(from?: string) {
    this.modalService.dismissAll();
  }


  submitButton: any

  addEditProduct() {
    this.sppinerDeleteDisplaying = true
    this.submitButton = (document.getElementById('submitProduct') as HTMLInputElement);
    this.submitButton.disabled = true
    if (this.data.operation !== "edit") {
      this.addProduct()
    } else {
      this.editProduct()
    }
  }

  addProduct() {
    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true
    this.productService.addProduct(this.productForm.value).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.submitButton.disabled = false
        this.sppinerDeleteDisplaying = false
        this.toastr.error('Problème lors de l\'ajout', 'Oops!');
      },
      () => {
        this.toastr.success('Ajouté avec succès', 'Succès!');
        this.sppinerDeleteDisplaying = false
        this.onAddEdit.emit({source: "close"});
      }
    );
  }

  editProduct() {
    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true
    this.productService.updateProduct(this.productId, this.productForm.value).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.submitButton.disabled = false
        this.sppinerDeleteDisplaying = false
        this.toastr.error('Problème lors de la modification', 'Oops!');
      },
      () => {
        this.toastr.success('Modifié avec succès', 'Succès!');
        this.sppinerDeleteDisplaying = false
        this.onAddEdit.emit()
        this.OncloseModal()
      }
    );
  }

  addForm() {
    //this.form.controls.startDate.setValue(this.today);
  }

  editForm() {
    this.product = this?.data?.product
    this.productId = this?.product?.id

    this.productForm.controls.id.setValue(this.product?.id);
    this.productForm.controls.name.setValue(this.product?.name);
    this.productForm.controls.categoryId.setValue(this.product?.categoryId);
    this.productForm.controls.quantity.setValue(this.product?.quantity);
    this.productForm.controls.price.setValue(this.product?.price);
    this.productForm.controls.comparePrice.setValue(this.product?.comparePrice);
    this.productForm.controls.visibility.setValue(this.product?.visibility);
    this.productForm.controls.description.setValue(this.product?.description);

  }

  getCategories(): void {
    this.loadingCategory = true
    this.categoryService.findCategories().subscribe(
      (response: any[]) => {
        this.categoryies = response
        this.loadingCategory = false
      },
      (error: HttpErrorResponse) => {
        this.loadingCategory = false;
      }, () => {
        this.loadingCategory = false;
      }
    );
  }

  ngOnInit(): void {
    this.initForm()
    this.getCategories()
    if (this.data.operation === 'add') {
      this.addForm()
    } else {
      this.editForm()
    }

  }
}
