import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {Product} from "../../products/models/product";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/images`;

  constructor(private http: HttpClient) {
  }
  public findImages(productId?: number): Observable<any> {
    let params: any = new HttpParams();
    if (productId != null) {
      params = params.set("productId", productId);
    }

    return this.http.get<any>(`${this.Url}`, {params});
  }
  public deleteImageByProductId(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/byProduct/${productId}`);
  }
  public deleteImageByCategoryId(categoryId: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/byCategory/${categoryId}`);
  }
  uploadCategoryImage(categoryId: number, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);

    const options = {
      params: new HttpParams().set('categoryId', categoryId.toString()) // Set categoryId as a query parameter
    };

    return this.http.post(`${this.Url}/uploadImage`, formData, options);
  }

  uploadProductImages(productId: number, files: File[]): Observable<any> {
    const formData = new FormData();

    for (const file of files) {
      formData.append('images', file);
    }
    return this.http.post(`${this.Url}/${productId}/uploadImages`, formData);
  }

  public findImagesFromAwsInFolder(folderPath?: string): Observable<any> {
    let params: any = new HttpParams();
    if (folderPath !== null && folderPath !== undefined && folderPath !== "" ) {
      params = params.set("folderPath", folderPath);
    }

    return this.http.get<any>(`${this.Url}/getImages`, {params});
  }
  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }
}
