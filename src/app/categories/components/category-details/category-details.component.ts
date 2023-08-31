import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from "../../../products/services/product.service";
import {Title} from "@angular/platform-browser";
import {DataService} from "../../../shared/services/data.service";
import {ActionsService} from "../../../shared/services/actions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ProductAddEditComponent} from "../../../products/components/product-add-edit/product-add-edit.component";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  products: any[] = []
  categoryId !: number;
  loadingProduct: boolean = true;
  active = 1

  constructor(
    private productService: ProductService,
    private titleService: Title,
    public dataService: DataService,
    private actionsService: ActionsService,
    private router: Router,
    private route: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: NgbModal
  ) {
    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get('id') as unknown as number;
    });
  }

  getProduct() {
    this.loadingProduct = true;
    this.productService.findProduct(null, null, this?.categoryId, null)
      .subscribe(
        (response) => {
          this.products = response
        },
        (errorGettingByCode) => {
          //this.router.navigate(['404'])
          this.loadingProduct = false
        },
        () => {
          this.loadingProduct = false
        }
      );
  }

  isCollapsed1 = true;

  closeAlert() {
    this.isCollapsed1 = !this.isCollapsed1
  }

  navigateToSupplierServicePage() {
    this.router.navigate(['/supplierService/search']);
  }


  OncloseModal() {
    this.modalService.dismissAll();
  }

  /*
    onEditSupplierService() {
      const dialogRef = this.modalService.open(AddEditSupplierServiceComponent, {
        size: "xl",
        backdrop: 'static',
        keyboard: false,
      });
      const data = {
        operation: "edit",
        supplierService: this.supplierSRV,
        item: {}
      }
      dialogRef.componentInstance.data = data;
      dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
        this.OncloseModal()
        this.supplierServiceService.triggerUpdateSupplierServiceDetail();
      });
    }

   */

  screenMode: string | undefined;

  @HostListener('window:resize', ['$event'])
  onResize() {
    const screenWidth = window.innerWidth;

    if (screenWidth > 875) {
      this.screenMode = 'big';
    } else {
      this.screenMode = 'small';
    }
  }

  navigateToProductPage(): void {
    this.router.navigate(['/products']);
  }

  editPage(): void {
    const dialogRef = this.modalService.open(ProductAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "edit",
      products: this.products,
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      this.OncloseModal()
      this.getProduct()
    });
  }

  loading: boolean = false

  ngOnInit(): void {
    this.productService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()

    })
    this.onResize()
    this.getProduct()

  }

}
