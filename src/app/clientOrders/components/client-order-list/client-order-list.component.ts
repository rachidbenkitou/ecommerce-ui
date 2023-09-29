import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {ClientOrderService} from "../../services/client-order.service";

@Component({
  selector: 'app-client-order-list',
  templateUrl: './client-order-list.component.html',
  styleUrls: ['./client-order-list.component.scss']
})
export class ClientOrderListComponent implements OnInit {

  @Input() clientOrderList: any[] = []
  @Output() getClientOrders: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10

  // @ts-ignore
  constructor(
    private clientOrderService: ClientOrderService,
    private dataService: DataService,
    private modalService: NgbModal,
    private toastr: ToastrService,
    private router: Router,
    private changeDetectorRef: ChangeDetectorRef) {
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  onDisplay(row: any) {
  }

  loading: boolean = false

  ngOnInit(): void {

    this.tableLimit = this.dataService.tableLimit
  }

}
