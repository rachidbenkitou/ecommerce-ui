import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../../../shared/services/data.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";
import {ImageService} from "../../../images/services/image.service";

@Component({
  selector: 'app-category-add-edit',
  templateUrl: './category-add-edit.component.html',
  styleUrls: ['./category-add-edit.component.scss']
})
export class CategoryAddEditComponent implements OnInit {

  @Input() data: any
  // tslint:disable-next-line:no-output-on-prefix
  @Output() onAddEdit: EventEmitter<any> = new EventEmitter();
  categoryForm!: UntypedFormGroup;
  loadingStates: boolean = false
  loadingCategory: boolean = false
  sppinerDeleteDisplaying: boolean = false
  category: Category;
  titre: any
  buttonName: string = 'Enregistrer'
  categoryId: number;

  constructor(private formBuilder: UntypedFormBuilder,
              private categoryService: CategoryService,
              private imageService: ImageService,
              private modalService: NgbModal,
              private dataService: DataService,
              private toastr: ToastrService,) {
  }

  initForm() {
    this.categoryForm = this.formBuilder.group({
      id: [,],
      name: [, Validators.required],
      visbility: ["visible", Validators.required],
    })
  }

  OncloseModal(from?: string) {
    this.modalService.dismissAll();
  }

  submitButton: any

  addEditCategory() {
    this.sppinerDeleteDisplaying = true
    this.submitButton = (document.getElementById('submitCategory') as HTMLInputElement);
    this.submitButton.disabled = true
    if (this.data.operation !== "edit") {
      this.addCategory()
    } else {
      this.editCategory()
    }
  }

  addCategory() {
    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true
    this.categoryService.addCategory(this.categoryForm.value).subscribe(
      (response: any) => {
        this.uploadFile(response?.id)
      },
      (error: HttpErrorResponse) => {
        this.submitButton.disabled = false
        this.sppinerDeleteDisplaying = false
        this.toastr.error('Problème lors de l\'ajout', 'Oops!');
      },
      () => {
        this.toastr.success('Ajouté avec succès', 'Succès!');
        if (!this.selectedFile){
          this.sppinerDeleteDisplaying = false
          this.onAddEdit.emit({source: "close"});
        }
        //this.OncloseModal()
      }
    );
  }

  deleteAndUploadImagesIfSelected(): void {
    if (this.selectedFile !== null && this.selectedFile !== undefined) {
      this.deleteCategoryImages()
    }

  }

  deleteCategoryImages(): void {
    this.imageService.deleteImageByCategoryId(this.categoryForm.value?.id).subscribe(
      (response: void) => {
        this.uploadFile(this.categoryForm.value?.id)
      },
      (error: HttpErrorResponse) => {
      },
      () => {
      }
    );
  }

  editCategory() {
    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true
    this.deleteAndUploadImagesIfSelected()
    this.categoryService.updateCategory(this.categoryId, this.categoryForm.value).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.submitButton.disabled = false
        this.sppinerDeleteDisplaying = false
        this.toastr.error('Problème lors de la modification', 'Oops!');
      },
      () => {
        this.toastr.success('Modifié avec succès', 'Succès!');
        //this.sppinerDeleteDisplaying = false
        //this.onAddEdit.emit()
        if (!this.selectedFile){
          this.sppinerDeleteDisplaying = false
          this.onAddEdit.emit({source: "close"});
        }
        this.OncloseModal()
      }
    );
  }

  addForm() {
    //this.form.controls.startDate.setValue(this.today);
  }

  editForm() {
    this.category = this?.data?.category
    this.categoryId = this?.category?.id

    this.categoryForm.controls.id.setValue(this.category?.id);
    this.categoryForm.controls.name.setValue(this.category?.name);
    this.categoryForm.controls.visbility.setValue(this.category?.visbility);


  }

  selectedFile: any;

  uploadFile(categoryId: number): void {
    if (this.selectedFile) {
      // Replace 'productId' with the actual product ID
      this.imageService.uploadCategoryImage(categoryId, this.selectedFile).subscribe(
        (response) => {
        },
        (error) => {
          console.error('Error uploading image:', error);
        },
        () => {
          this.sppinerDeleteDisplaying = false
          this.onAddEdit.emit({source: "close"});
        }
      );
    }
  }

  handleImageSelected(image: any): void {
    this.selectedFile = image.target.files[0];
  }

  ngOnInit(): void {
    this.initForm()
    if (this.data.operation === 'add') {
      this.addForm()
    } else {
      this.editForm()
    }

  }
}
