import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataService} from "../../../shared/services/data.service";
import {Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpErrorResponse} from "@angular/common/http";
import {SaleService} from "../../services/sale.service";
import {ToastrService} from "ngx-toastr";

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
    private modalService: NgbModal,
    private saleService: SaleService,
    private toastr: ToastrService) {
  }

  OncloseModal() {
    this.modalService.dismissAll();
  }

  getOrderDetails(id: any) {
    this.route.navigate(['/clientOrders/sale', id]);
  }

  changeSaleStatusToAccepted(saleId: number) {
    this.saleService.changeSaleStatusToAccepted(saleId).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Problème lors de la modification', 'Oops!');
      },
      () => {
        this.toastr.success('Modifié avec succès', 'Succès!');
      }
    );
  }

  changeSaleStatusToReported(saleId: number) {
    this.saleService.changeSaleStatusToReported(saleId).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Problème lors de la modification', 'Oops!');
      },
      () => {
        this.toastr.success('Modifié avec succès', 'Succès!');
      }
    );
  }

  changeSaleStatusToCancelled(saleId: number) {
    this.saleService.changeSaleStatusToCancelled(saleId).subscribe(
      (response: any) => {
      },
      (error: HttpErrorResponse) => {
        this.toastr.error('Problème lors de la modification', 'Oops!');
      },
      () => {
        this.toastr.success('Modifié avec succès', 'Succès!');
      }
    );
  }

  loading: boolean = false

  ngOnInit(): void {
    this.tableLimit = this.dataService.tableLimit
  }

}
