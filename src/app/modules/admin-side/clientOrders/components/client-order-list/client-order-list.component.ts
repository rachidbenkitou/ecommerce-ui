import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ClientOrderService} from "../../services/client-order.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-client-order-list',
  templateUrl: './client-order-list.component.html',
  styleUrls: ['./client-order-list.component.scss']
})
export class ClientOrderListComponent implements OnInit {

  @Input() clientOrderList: any[] = []
  @Output() getClientOrders: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10
  clientOrderDetails: any[] = []

  // @ts-ignore
  constructor(
    private dataService: DataService,
    private route: Router,
    private modalService: NgbModal,
    private clientOrderService: ClientOrderService,
    private toastr: ToastrService) {
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  getOrderDetails(id: any) {
    this.route.navigate(['/clientOrders', id]);
  }

  changeClientOrderStatusToAccepted(clientOrderId: number) {
    this.clientOrderService.changeClientOrderStatusToAccepted(clientOrderId).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Problem occurred during modification.', 'Oops!');
      },
      () => {
        this.toastr.success('Status has been changed successfully.', 'Success!');
        this.getClientOrders.emit();
      }
    );
  }

  changeClientOrderStatusToReported(clientOrderId: number) {
    this.clientOrderService.changeClientOrderStatusToReported(clientOrderId).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Problem occurred during modification.', 'Oops!');
      },
      () => {
        this.toastr.success('Status has been changed successfully.', 'Success!');
        this.getClientOrders.emit();
      }
    );
  }

  changeClientOrderStatusToCancelled(clientOrderId: number) {
    this.clientOrderService.changeClientOrderStatusToCancelled(clientOrderId).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Problem occurred during modification.', 'Oops!');
      },
      () => {
        this.toastr.success('Status has been changed successfully.', 'Success!');
        this.getClientOrders.emit();
      }
    );
  }

  loading: boolean = false

  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit
  }

}
