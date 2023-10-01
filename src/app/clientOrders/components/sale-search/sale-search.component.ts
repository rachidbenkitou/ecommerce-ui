import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {HttpErrorResponse} from "@angular/common/http";
import {SaleService} from "../../services/sale.service";

@Component({
  selector: 'app-sale-search',
  templateUrl: './sale-search.component.html',
  styleUrls: ['./sale-search.component.scss']
})
export class SaleSearchComponent implements OnInit {
  @Output() loadingState: EventEmitter<any> = new EventEmitter();
  loading: boolean = true

  public isCollapsed1 = false;

  saleForm!: UntypedFormGroup;

  saleList: any[] = [];
  saleStatusList: any[] = [
    {id: 1, name: "PROCESSING"},
    {id: 2, name: "PENDING"},
  ];


  constructor(
    private formBuilder: UntypedFormBuilder,
    private saleService: SaleService,
  ) {
    saleService.reload.subscribe(ev => {
      this.reset()
    })
  }


  initForm() {
    this.saleForm = this.formBuilder.group({
      id: [],
      saleStatus: [],
    });
  }

  public getSales(id?: number, ordersStatus?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-sale-form') as HTMLInputElement);
    submitButton.disabled = true
    this.saleService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.saleService.findSales(id, ordersStatus).subscribe(
      (response: any[]) => {
        this.saleList = response;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        submitButton.disabled = false
        this.saleService.changeLoadingState(false)
      },
      () => {
        submitButton.disabled = false
        this.loading = false
        this.saleService.changeLoadingState(false)

      }
    );
  }

  reset(): void {
    this.saleForm.reset()
    this.getSales()
  }

  search(): void {
    this.getSales(
      this?.saleForm.value?.id,
      this?.saleForm.value?.orderStatus)
  }

  ngOnInit(): void {
    this.initForm()
    this.getSales()
  }

}
