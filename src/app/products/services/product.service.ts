import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../models/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/products`;

  constructor(private http: HttpClient) {
  }

  public findProduct(productId?: number, productName?: string, categoryId?: number, visibilty?: string): Observable<Product[]> {
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
      params = params.set("productVisibility", visibilty);
    }

    return this.http.get<Product[]>(`${this.Url}`, {params});
  }

  public findProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.Url}/` + id);
  }

  public addProduct(product: Product): Observable<any> {
    return this.http.post<any>(`${this.Url}`, product);
  }

  public updateProduct(id: number, product: any): Observable<Product> {
    return this.http.put<Product>(`${this.Url}/${id}`, product);
  }

  public deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  public product=new BehaviorSubject(false)
  editFormList(product: any){
    this.product.next(product)
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
