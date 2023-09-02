import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
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

  public findCategoryById(id: number): Observable<Category> {
    return this.http.get<Category>(`${this.Url}/` + id);
  }

  public addCategory(category: Category): Observable<any> {
    return this.http.post<any>(`${this.Url}`, category);
  }

  public updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.Url}/${id}`, category);
  }

  public deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
  }

  uploadCategoryImage(categoryId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    const options = {
      params: new HttpParams().set('categoryId', categoryId.toString()) // Set categoryId as a query parameter
    };

    return this.http.post(`${this.Url}/uploadImage`, formData, options);
  }


  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private categoryId: number;

  setCategoryId(id: number) {
    this.categoryId = id;
  }

  getCategoryId(): number {
    return this.categoryId;
  }
}
