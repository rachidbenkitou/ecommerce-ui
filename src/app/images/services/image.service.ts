import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/products`;

  constructor(private http: HttpClient) {
  }

  public deleteImageByProductId(productId: number): Observable<void> {
    return this.http.delete<void>(`${this.Url}/byProduct/${productId}`);
  }
}
