import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {CategoryService} from "../../../categories/services/category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ClientOrderService} from "../../services/client-order.service";

@Component({
  selector: 'app-client-order-search',
  templateUrl: './client-order-search.component.html',
  styleUrls: ['./client-order-search.component.scss']
})
export class ClientOrderSearchComponent implements OnInit {

  @Output() loadingState: EventEmitter<any> = new EventEmitter();
  loading: boolean = true

  public isCollapsed1 = false;

  clientOrderForm!: UntypedFormGroup;

  clientOrderList: any[] = [];
  orderStatusList: any[] = [
    {id: 1, name: "PROCESSING"},
    {id: 2, name: "PENDING"},
  ];

  clientOrderDetailsList: any[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private clientOrderService: ClientOrderService,
    private categoryService: CategoryService
  ) {
    clientOrderService.reload.subscribe(ev => {
      this.reset()
    })
  }


  initForm() {
    this.clientOrderForm = this.formBuilder.group({
      id: [],
      clientId: [],
      orderStatus: [],
    });
  }

  public getClientOrders(id?: number, clientId?: number, ordersStatus?: string): void {
    this.loading = true
    const submitButton = (document.getElementById('find-clientOrder-form') as HTMLInputElement);
    submitButton.disabled = true
    this.clientOrderService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.clientOrderService.findClientOrders(id, clientId, ordersStatus).subscribe(
      (response: any[]) => {
        this.clientOrderList = response;
      },
      (error: HttpErrorResponse) => {
        this.loading = false;
        submitButton.disabled = false
        this.clientOrderService.changeLoadingState(false)
      },
      () => {
        submitButton.disabled = false
        this.loading = false
        this.clientOrderService.changeLoadingState(false)

      }
    );
  }

  /*
    getCategoryList() {
      //this.loadingState.emit(true)
      this.productService.changeLoadingState(true)
      this.categoryService.findCategories().subscribe(
        (response: any[]) => {
          this.categoryList = response;
          //this.loadingState.emit(false)
          this.productService.changeLoadingState(false)
        }
      );

    }
   */

  reset(): void {
    this.clientOrderForm.reset()
    this.getClientOrders()
  }

  search(): void {
    this.getClientOrders(
      this?.clientOrderForm.value?.id,
      this?.clientOrderForm.value?.clientId,
      this?.clientOrderForm.value?.orderStatus)
  }

  ngOnInit(): void {
    this.initForm()
    this.getClientOrders()
  }

}
