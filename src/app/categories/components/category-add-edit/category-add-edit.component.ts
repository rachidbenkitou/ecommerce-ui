import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Category} from "../../models/category";
import {CategoryService} from "../../services/category.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DataService} from "../../../shared/services/data.service";
import {ToastrService} from "ngx-toastr";
import {HttpErrorResponse} from "@angular/common/http";

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
        this.uploadFile(response?.id);
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

  editCategory() {
    this.sppinerDeleteDisplaying = true
    this.submitButton.disabled = true
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
      this.categoryService.uploadCategoryImage(categoryId, this.selectedFile).subscribe(
        (response) => {
          console.log('Image uploaded successfully:', response);
        },
        (error) => {
          console.error('Error uploading image:', error);
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
