import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class StatusService {
  Url: string = `${environment.appUrl}api/orderStatuses`;

  constructor(private http: HttpClient) {
  }

  public findSales(): Observable<any[]> {
    return this.http.get<any[]>(`${this.Url}`);
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }
}
