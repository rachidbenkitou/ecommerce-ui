import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-sale-list',
  templateUrl: './sale-list.component.html',
  styleUrls: ['./sale-list.component.scss']
})
export class SaleListComponent implements OnInit {
  @Input() saleList: any[] = []
  @Output() getSales: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10

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
    this.route.navigate(['/clientOrders/sale', id]);
  }

  loading: boolean = false

  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit
  }

}
