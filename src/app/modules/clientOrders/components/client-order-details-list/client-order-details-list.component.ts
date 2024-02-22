import {ChangeDetectorRef, Component, HostListener, OnInit} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ClientOrderDetailsService} from "../../services/client-order-details.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-client-order-details-list',
  templateUrl: './client-order-details-list.component.html',
  styleUrls: ['./client-order-details-list.component.scss']
})
export class ClientOrderDetailsListComponent implements OnInit {

  clientOrderDetailsList: any[] = []
  tableLimit: number = 10
  orderId: number;
  loadingClientOrderDetails: boolean = true;
  active = 1


  // @ts-ignore
  constructor(
    private clientOrderDetailsService: ClientOrderDetailsService,
    private dataService: DataService,
    private route: Router,
    private router: ActivatedRoute,
    private changeDetectorRef: ChangeDetectorRef,
    private modalService: NgbModal) {
    this.router.paramMap.subscribe(params => {
      this.orderId = params.get('id') as unknown as number;
    });
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  loading: boolean = false

  getOrderDetails(id: any) {
    this.loadingClientOrderDetails = true;
    this.clientOrderDetailsService.findClientOrderDetails(id)
      .subscribe(
        (response) => {
          this.clientOrderDetailsList = response
        },
        (errorGettingByCode) => {
          //this.router.navigate(['404'])
          this.loadingClientOrderDetails = false
        },
        () => {
          this.loadingClientOrderDetails = false
        }
      );
  }

  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit
    this.getOrderDetails(this.orderId)

    this.clientOrderDetailsService.loading$.subscribe(event => {
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

  navigateToClientOrderPage(): void {
    this.route.navigate(['/clientOrders/orders']);
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
