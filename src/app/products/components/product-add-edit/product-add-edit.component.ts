import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../services/product.service";
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryService} from "../../../categories/services/category.service";
import {Category} from "../../../categories/models/category";
import {ActivatedRoute, Router} from "@angular/router";
import {ImageService} from "../../../images/services/image.service";

@Component({
  selector: 'app-product-add-edit',
  templateUrl: './product-add-edit.component.html',
  styleUrls: ['./product-add-edit.component.scss']
})
export class ProductAddEditComponent implements OnInit {


  @Input() data: any = {};
  @Input() product: any
  selectedImages: any;
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddEdit: EventEmitter<any> = new EventEmitter();
  productForm!: UntypedFormGroup;
  loadingStates: boolean = false
  updateState: boolean = false
  loadingCategory: boolean = false
  sppinerDeleteDisplaying: boolean = false
  categoryies: Category[] = [];
  titre: any
  buttonName: string = 'Enregistrer'
  productId: number;
  editFormList: boolean = false;

  constructor(private formBuilder: UntypedFormBuilder,
              private productService: ProductService,
              private categoryService: CategoryService,
              private imageService: ImageService,
              private modalService: NgbModal,
              private dataService: DataService,
              private toastr: ToastrService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    if (activatedRouter.snapshot.data.addAction) {
      this.data.operation = "add"
    }
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
    //this.modalService.dismissAll();
    this.router.navigate(['products/search'])
  }

  OncloseModal1(from?: string) {
    this.modalService.dismissAll();
  }

  submitButton: any

  addEditProduct() {
    this.sppinerDeleteDisplaying = true
    this.submitButton = (document.getElementById('submitProduct') as HTMLInputElement);
    this.submitButton.disabled = true
    if (this.data.operation === "add") {
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
        if (this.selectedImages !== null && this.selectedImages !== undefined) {
          this.uploadFiles(response?.id)
        }
        if (!this.isSizeRespected) {
          this.toastr.info('Images are not added because they are out of size, click Edit and choose the correct size images.', 'Info!');
        }

      },
      (error: HttpErrorResponse) => {
        this.submitButton.disabled = false
        this.sppinerDeleteDisplaying = false
      },
      () => {
        if (this.isSizeRespected) {
          this.toastr.success('Added successfully', 'Success!');
        }

        if (!this.selectedImages){
          this.sppinerDeleteDisplaying = false
          this.router.navigate(['products/search'])
        }
      }
    );


  }

  deleteProductImages(): void {
    this.imageService.deleteImageByProductId(this.productForm.value?.id).subscribe(
      (response: void) => {
        this.uploadFiles(this.productForm.value?.id)
      },
      (error: HttpErrorResponse) => {
      },
      () => {
      }
    );

  }

  deleteAndUploadImagesIfSelected(): void {
    if (this.selectedImages !== null && this.selectedImages !== undefined) {
      this.deleteProductImages()
    }
  }

  editProduct() {
    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true
    this.deleteAndUploadImagesIfSelected()
    this.productService.updateProduct(this.productForm.value?.id, this.productForm.value).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.submitButton.disabled = false
        this.sppinerDeleteDisplaying = false
      },
      () => {
        if (this.isSizeRespected) {
          this.toastr.success('Edited successfully', 'Success!');
        }
        if (!this.selectedImages){
          this.sppinerDeleteDisplaying = false
          this.router.navigate(['products/search'])
        }

      }
    );
  }

  addForm() {
  }

  editForm() {
    this.updateState = true
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

  isSizeRespected: boolean = false;

  getSelectedImages(event: any) {
    this.selectedImages = event.selectedImages.target.files;
    this.isSizeRespected = event.isSizeRespected
  }

  uploadFiles(productId: number): void {
    if (this.selectedImages.length !== 0) {
      this.imageService.uploadProductImages(productId, this.selectedImages).subscribe(
        (response) => {
          console.log('Images uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading images:', error);
        },
        () => {
          this.sppinerDeleteDisplaying = false
          this.router.navigate(['products/search'])

        }
      );
    }
  }

  ngOnInit(): void {
    this.initForm()
    this.getCategories()
    if (this.data.operation === 'add') {
      this.addForm()
    } else {
      if (this.productService.product.getValue()) {
        this.product = this.productService.product.getValue()
        this.editFormList = true
      }
      this.editForm()
    }

  }
}
