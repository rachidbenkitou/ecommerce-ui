import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../products/models/product";

@Injectable({
  providedIn: 'root'
})
export class ClientOrderDetailsService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/clientOrderDetails`;

  constructor(private http: HttpClient) {
  }

  public findClientOrderDetails(orderId?: number): Observable<Product[]> {
    let params: any = new HttpParams();

    if (orderId != null) {
      params = params.set("orderId", orderId);
    }
    return this.http.get<Product[]>(`${this.Url}`, {params});
  }

  public findClientOrderDetailsById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.Url}/` + id);
  }

  public deleteClientOrderDetails(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private ClientOrderDetailsId: number;

  setClientOrderDetailsId(id: number) {
    this.ClientOrderDetailsId = id;
  }

  getClientOrderDetailsId(): number {
    return this.ClientOrderDetailsId;
  }
}
