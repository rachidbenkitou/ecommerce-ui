import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../../../environments/environment";
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

  public findSales(saleId?: number, saleStatusId?: number): Observable<any[]> {
    let params: any = new HttpParams();

    if (saleId != null) {
      params = params.set("id", saleId);
    }
    if (saleStatusId != null) {
      params = params.set("saleStatusId", saleStatusId);
    }

    return this.http.get<any[]>(`${this.Url}`, {params});
  }

  public changeSaleStatusToAccepted(saleId: number): Observable<any> {
    return this.http.patch<any>(`${this.Url}/${saleId}/accepted`, null);
  }

  public changeSaleStatusToReported(saleId: number): Observable<any> {
    return this.http.patch<any>(`${this.Url}/${saleId}/reported`, null);
  }

  public changeSaleStatusToCancelled(saleId: number): Observable<any> {
    return this.http.patch<any>(`${this.Url}/${saleId}/cancelled`, null);
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
