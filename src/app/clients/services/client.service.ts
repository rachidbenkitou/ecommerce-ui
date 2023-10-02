import {EventEmitter, Injectable, Output} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  @Output() reload = new EventEmitter<any>();
  Url: string = `${environment.appUrl}api/clients`;

  constructor(private http: HttpClient) {
  }

  public findClients(clientId?: number, email?: string, phoneNumber?: string, statusId?: number): Observable<any[]> {
    let params: any = new HttpParams();

    if (clientId != null) {
      params = params.set("clientId", clientId);
    }
    if (email != null && email !== '') {
      params = params.set("email", email);
    }
    if (phoneNumber != null && phoneNumber !== '') {
      params = params.set("phoneNumber", phoneNumber);
    }
    if (statusId != null) {
      params = params.set("statusId", statusId);
    }

    return this.http.get<any[]>(`${this.Url}`, {params});
  }

  //loading in router outlet
  public loading = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  changeLoadingState(loading: boolean) {
    this.loading.next(loading)
  }

  private clientId: number;

  setClientId(id: number) {
    this.clientId = id;
  }

  getClientId(): number {
    return this.clientId;
  }
}
