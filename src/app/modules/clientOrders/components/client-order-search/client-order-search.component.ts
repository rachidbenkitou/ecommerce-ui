import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UntypedFormBuilder, UntypedFormGroup} from "@angular/forms";
import {CategoryService} from "../../../categories/services/category.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ClientOrderService} from "../../services/client-order.service";
import {StatusService} from "../../services/status.service";

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
  clientOrderStatusList: any[] = [];

  constructor(
    private formBuilder: UntypedFormBuilder,
    private clientOrderService: ClientOrderService,
    private statusService: StatusService,
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

  public getClientOrders(id?: number, clientId?: number, ordersStatusId?: number): void {
    this.loading = true
    const submitButton = (document.getElementById('find-clientOrder-form') as HTMLInputElement);
    submitButton.disabled = true
    this.clientOrderService.changeLoadingState(true)
    this.isCollapsed1 = false
    this.clientOrderService.findClientOrders(id, clientId, ordersStatusId).subscribe(
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

  getClientOrderStatusList() {
    //this.loadingState.emit(true)
    this.statusService.changeLoadingState(true)
    this.statusService.findStatuses().subscribe(
      (response: any[]) => {
        this.clientOrderStatusList = response;
        //this.loadingState.emit(false)
        this.statusService.changeLoadingState(false)
      }
    );

  }

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
    this.getClientOrderStatusList()
  }

}
