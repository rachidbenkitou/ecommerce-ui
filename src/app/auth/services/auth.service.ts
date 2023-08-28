import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public currentUser: any;
  authUrl: string = environment.wimAppServiceUrl + '/auth';
  forgotPasswordUrl = environment.wimAppServiceUrl+ '/auth/forgotPassword';
  changeForgottenPasswordUrl: any =  environment.wimAppServiceUrl+ '/auth/confirmForgotPassword';

  constructor(private http: HttpClient) {

  }

  login(payload: any): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/login`, payload, {})
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.authUrl}/logout`, {}, {})
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  getCurrentUser(): Observable<any> {
    return this.http.get<any>(`${this.authUrl}/current`)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }
  getForgottenPassword(body:any): Observable<any> {
    return this.http.post<any>(`${this.forgotPasswordUrl}`,body)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

  changeForgottenPassword(body:any) : Observable<any>{
    return this.http.post<any>(`${this.changeForgottenPasswordUrl}`,body)
      .pipe(catchError((error: any) => {
        return throwError(error);
      }));
  }

}
