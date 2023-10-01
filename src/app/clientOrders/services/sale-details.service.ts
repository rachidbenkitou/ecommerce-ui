import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SaleDetailsService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/saleDetails`;

  constructor(private http: HttpClient) {
  }

  public findSaleDetails(saleId?: number): Observable<any[]> {
    let params: any = new HttpParams();

    if (saleId != null) {
      params = params.set("saleId", saleId);
    }
    return this.http.get<any[]>(`${this.Url}`, {params});
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private saleDetailsId: number;

  setSaleDetailsId(id: number) {
    this.saleDetailsId = id;
  }

  getSaleDetailsId(): number {
    return this.saleDetailsId;
  }
}
