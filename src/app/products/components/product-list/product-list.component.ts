import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ProductAddEditComponent} from "../product-add-edit/product-add-edit.component";
import {ProductDetailsComponent} from "../product-details/product-details.component";
import {ProductService} from "../../services/product.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() productList: any[] = []
  @Output() getProducts: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10
  deletedProduct: any;

  // @ts-ignore
  constructor(
    private productService: ProductService,
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
    this.route.navigate(['/products', row.id]);
  }

  onEdit(row) {
    const dialogRef = this.modalService.open(ProductAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "edit",
      product: row,
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      this.OncloseModal()
      this.getProducts.emit()

    });
  }


  onOpenModal(target: TemplateRef<any>, product: any, mode: string): void {
    if (mode === 'delete') {
      this.deletedProduct = product;
    }
    this.modalService.open(target, {
      centered: true,
      backdrop: 'static'
    });
  }

  submitButton: any
  sppinerDeleteDisplaying: boolean = false

  deleteProductFunction(productId: number): void {

    this.submitButton = (document.getElementById('submitDelete') as HTMLInputElement);
    this.submitButton.disabled = true
    this.sppinerDeleteDisplaying = true
    this.productService.deleteProduct(productId).subscribe(
      (response: void) => {
      },
      (error: HttpErrorResponse) => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.OncloseModal();
      },
      () => {
        this.sppinerDeleteDisplaying = false
        this.submitButton.disabled = false
        this.getProducts.emit();
        this.OncloseModal();
        this.toastr.success('Supprimé avec succès', 'Succès!');
      }
    );

  }

  loading: boolean = false

  ngOnInit(): void {

    this.tableLimit = this.dataService.tableLimit
  }

}
