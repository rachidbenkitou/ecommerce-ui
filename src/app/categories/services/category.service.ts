import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../products/models/product";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/categories`;

  constructor(private http: HttpClient) {
  }

  public findCategories(categoryId?: number, categoryName?: string, visibilty?: string): Observable<Category[]> {
    let params: any = new HttpParams();

    if (categoryName != null && categoryName !== '') {
      params = params.set("categoryName", categoryName);
    }
    if (categoryId != null) {
      params = params.set("categoryId", categoryId);
    }
    if (visibilty != null && visibilty !== '') {
      params = params.set("categoryVisbility", visibilty);
    }

    return this.http.get<Category[]>(`${this.Url}`, {params});
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
