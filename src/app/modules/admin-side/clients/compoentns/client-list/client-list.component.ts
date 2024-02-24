import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.scss']
})
export class ClientListComponent implements OnInit {

  @Input() clientList: any[] = []
  @Output() getClients: EventEmitter<any> = new EventEmitter();
  tableLimit: number = 10
  clientDetails: any[] = []

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
    //this.route.navigate(['/clientOrders', id]);
  }

  loading: boolean = false

  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit
  }


}
