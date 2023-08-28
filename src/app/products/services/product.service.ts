import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Output() reload = new EventEmitter<any>();
  Url: string = environment.appUrl;

  constructor(private http: HttpClient) {
  }

  public findProduct(productId?: number, productName?: string, categoryId?: number, visibilty?: string): Observable<any[]> {
    let params: any = new HttpParams();

    if (productName != null && productName !== '') {
      params = params.set("productName", productName);
    }
    if (productId != null) {
      params = params.set("productId", productId);
    }
    if (categoryId != null) {
      params = params.set("categoryId", categoryId);
    }
    if (visibilty != null && visibilty !== '') {
      params = params.set("visibilty", visibilty);
    }

    return this.http.get<any[]>(`${this.Url}`, {params});
  }

  public findProductById(id: number): Observable<any> {
    return this.http.get<any>(`${this.Url}/` + id);
  }

  public addProduct(tntOption: any): Observable<any> {
    return this.http.post<any>(`${this.Url}`, tntOption);
  }

  public updateProduct(tntId: number, tntOption: any): Observable<any> {
    return this.http.put<any>(`${this.Url}/${tntId}`, tntOption);
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private tntProductId: number;

  setProductId(id: number) {
    this.tntProductId = id;
  }

  getProductId(): number {
    return this.tntProductId;
  }
}
