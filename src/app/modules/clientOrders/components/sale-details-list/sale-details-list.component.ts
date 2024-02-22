import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {ClientOrderDetailsService} from "../../services/client-order-details.service";
import {DataService} from "../../../shared/services/data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SaleDetailsService} from "../../services/sale-details.service";

@Component({
  selector: 'app-sale-details-list',
  templateUrl: './sale-details-list.component.html',
  styleUrls: ['./sale-details-list.component.scss']
})
export class SaleDetailsListComponent implements OnInit {
  saleDetailsList: any[] = []
  tableLimit: number = 10
  saleId: number;
  loadingSaleDetails: boolean = true;
  active = 1


  // @ts-ignore
  constructor(
    private saleDetailsService: SaleDetailsService,
    private dataService: DataService,
    private route: Router,
    private router: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: NgbModal) {
    this.router.paramMap.subscribe(params => {
      this.saleId = params.get('id') as unknown as number;
    });
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  loading: boolean = false

  getSaleDetails(id: any) {
    this.loadingSaleDetails = true;
    this.saleDetailsService.findSaleDetails(id)
      .subscribe(
        (response) => {
          this.saleDetailsList = response
        },
        (errorGettingByCode) => {
          //this.router.navigate(['404'])
          this.loadingSaleDetails = false
        },
        () => {
          this.loadingSaleDetails = false
        }
      );
  }

  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit
    this.getSaleDetails(this.saleId)

    this.saleDetailsService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()

    })
  }

  isCollapsed1 = true;

  closeAlert() {
    this.isCollapsed1 = !this.isCollapsed1
  }

  navigateToSupplierServicePage() {
    this.route.navigate(['/supplierService/search']);
  }

  navigateToSalPage(): void {
    this.route.navigate(['/clientOrders/sales']);
  }

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
}
