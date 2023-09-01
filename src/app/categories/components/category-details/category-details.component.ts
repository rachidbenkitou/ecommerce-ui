import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from "../../../products/services/product.service";
import {Title} from "@angular/platform-browser";
import {DataService} from "../../../shared/services/data.service";
import {ActionsService} from "../../../shared/services/actions.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CategoryAddEditComponent} from "../category-add-edit/category-add-edit.component";
import {CategoryService} from "../../services/category.service";
import {Category} from "../../models/category";

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit {

  products: any[] = []
  category: Category;
  categoryId !: number;
  loadingProduct: boolean = true;
  active = 1

  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
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

  getProducts() {
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

  getCategory() {
    this.categoryService.findCategoryById(this.categoryId)
      .subscribe(
        (response) => {
          this.category = response
        },
        (errorGettingByCode) => {
        },
        () => {
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

  navigateToCategoryPage(): void {
    this.router.navigate(['/categories']);
  }

  editPage(): void {
    const dialogRef = this.modalService.open(CategoryAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "edit",
      category: this.category,
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      this.OncloseModal()
      this.getProducts()
    });
  }

  loading: boolean = false

  ngOnInit(): void {
    this.productService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()

    })
    this.onResize()
    this.getProducts()
    this.getCategory()

  }

}
