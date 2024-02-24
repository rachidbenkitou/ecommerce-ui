import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryService} from "../../services/category.service";
import {CategoryAddEditComponent} from "../category-add-edit/category-add-edit.component";
import {ImageService} from "../../../images/services/image.service";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {

  @Input() categoryList: any[] = []
  @Output() getCategories: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10
  deletedCategory: any;

  // @ts-ignore
  constructor(
    private categoryService: CategoryService,
    private imageService: ImageService,
    private dataService: DataService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private route: Router,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  onDisplay(row: any) {
    this.route.navigate(['/categories', row.id]);
  }

  addCategory() {
    const dialogRef = this.modalService.open(CategoryAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "add",
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      if (event.source === "close") {
        dialogRef.close()
      }
      this.categoryService.reload.emit()
    });
  }
  onEdit(row) {
    const dialogRef = this.modalService.open(CategoryAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "edit",
      category: row,
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      this.OncloseModal()
      this.getCategories.emit()

    });
  }


  onOpenModal(target: TemplateRef<any>, category: any, mode: string): void {
    if (mode === 'delete') {
      this.deletedCategory = category;
    }
    this.modalService.open(target, {
      centered: true,
      backdrop: 'static'
    });
  }

  submitButton: any
  sppinerDeleteDisplaying: boolean = false

  deleteCategoryImages(categoryId: number): void {
    this.imageService.deleteImageByCategoryId(categoryId).subscribe(
        (response: void) => {
        },
        (error: HttpErrorResponse) => {
        },
        () => {
        }
    );
  }
  deleteCategoryFunction(categoryId: number): void {
    this.submitButton = (document.getElementById('submitDelete') as HTMLInputElement);
    this.submitButton.disabled = true
    this.sppinerDeleteDisplaying = true
    this.categoryService.deleteCategory(categoryId).subscribe(
      (response: void) => {
        this.deleteCategoryImages(categoryId)
      },
      (error: HttpErrorResponse) => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.OncloseModal();
      },
      () => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.getCategories.emit();
        this.OncloseModal();
        this.toastr.success('Supprimé avec succès', 'Succès!');
      }
    );

  }
  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit

  }

}
