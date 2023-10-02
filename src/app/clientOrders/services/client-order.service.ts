import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../products/models/product";

@Injectable({
  providedIn: 'root'
})
export class ClientOrderService {

  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/clientOrders`;

  constructor(private http: HttpClient) {
  }

  public findClientOrders(orderId?: number, clientId?: number, orderStatusId?: number): Observable<Product[]> {
    let params: any = new HttpParams();

    if (orderId != null) {
      params = params.set("orderId", orderId);
    }
    if (clientId != null) {
      params = params.set("clientId", clientId);
    }
    if (orderStatusId != null) {
      params = params.set("orderStatusId", orderStatusId);
    }

    return this.http.get<Product[]>(`${this.Url}`, {params});
  }

  public findClientOrderById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.Url}/` + id);
  }

  public deleteClientOrder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private tntClientOrderId: number;

  setClientOrderIdId(id: number) {
    this.tntClientOrderId = id;
  }

  getClientOrderIdId(): number {
    return this.tntClientOrderId;
  }
}
