import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Category} from "../models/category";
import {ImageService} from "../../images/services/image.service";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/categories`;

  constructor(private http: HttpClient,
              private imageService: ImageService) {
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
  addCategory(category: Category): Observable<any> {
    return this.http.post<Category>(`${this.Url}`, category);
  }

  public updateCategory(id: number, category: Category): Observable<Category> {
    return this.http.put<Category>(`${this.Url}/${id}`, category);
  }

  public deleteCategory(id: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/${id}`);
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
