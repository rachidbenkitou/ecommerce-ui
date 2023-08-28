import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  Url: string = environment.wimAppServiceUrl + 'user';

  constructor(private http: HttpClient) { }

  public getMenuList(): Observable<any[]> {
    return this.http.get<any[]>(`${this.Url}/menu`);
  }

}
