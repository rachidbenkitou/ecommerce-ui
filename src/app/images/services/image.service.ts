import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/images`;

  constructor(private http: HttpClient) {
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
}
