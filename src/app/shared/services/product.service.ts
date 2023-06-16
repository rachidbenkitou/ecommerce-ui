import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl = 'http://localhost:9000/products';


  constructor(
    private _http: HttpClient
  ) { }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(this.baseUrl)
  }

  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>(this.baseUrl, product)
  }

  deleteProductById(productId: Number): Observable<void> {
    const url = `${this.baseUrl}/${productId}`;
    return this._http.delete<void>(url)
  }



}
