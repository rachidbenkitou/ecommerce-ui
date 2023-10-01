import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaleService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/sales`;

  constructor(private http: HttpClient) {
  }

  public findSales(saleId?: number, orderStatus?: string): Observable<any[]> {
    let params: any = new HttpParams();

    if (saleId != null) {
      params = params.set("id", saleId);
    }
    if (orderStatus != null && orderStatus !== '') {
      params = params.set("orderStatus", orderStatus);
    }

    return this.http.get<any[]>(`${this.Url}`, {params});
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private saleId: number;

  setSaleId(id: number) {
    this.saleId = id;
  }

  getSaleId(): number {
    return this.saleId;
  }
}
