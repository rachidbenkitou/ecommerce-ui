import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ClientOrderDetailsService} from "../../services/client-order-details.service";
import {Router} from "@angular/router";

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
    private modalService: NgbModal) {
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  getOrderDetails(id: any) {
    this.route.navigate(['/clientOrders', id]);
  }

  loading: boolean = false

  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit
  }

}
