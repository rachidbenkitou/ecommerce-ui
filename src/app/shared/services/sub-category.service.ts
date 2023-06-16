import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SubCategory } from '../models/subCategory';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubCategoryService {

  constructor(
    private _http: HttpClient
  ) { }

  getSubCategories(): Observable<SubCategory[]> {
    return this._http.get<SubCategory[]>(`http://localhost:9000/subCategories`)
  }
}
