import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private _http: HttpClient
  ) { }

  addProduct(product: Product): Observable<Product> {
    return this._http.post<Product>(`http://localhost:9000/products`, product)
  }

  getProducts(): Observable<Product[]> {
    return this._http.get<Product[]>(`http://localhost:9000/products`)
  }
  
}
