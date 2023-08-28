import { buildSearchParams } from 'src/app/shared/services/utils';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';


export abstract class AbstractRestService<T> {
  constructor(protected http: HttpClient, protected actionUrl: string) {}

  getEntities(params?:any): Observable<any> {
    return this.http
      .get<T[]>(this.actionUrl, {
        params: buildSearchParams(params)
      })
      .pipe(
        catchError((error: any) => {
          return throwError(error);
        })
      );
  }

  getOne(id: any): Observable<T> {    
    return this.http.get<T>(`${this.actionUrl}/${id}`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  deleteOne(id: any): Observable<T> {
    return this.http.delete<T>(`${this.actionUrl}/${id}`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  delete(params: any): Observable<T> {
    return this.http.delete<T>(`${this.actionUrl}`, { params }).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  addOne(body: any): Observable<T> {
    return this.http.post<T>(`${this.actionUrl}`, body).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  add(params: any, body: any): Observable<any> {
    return this.http.post<any>(`${this.actionUrl}`, body, { params }).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  updateOne(body: any): Observable<T> {
    return this.http
      .put<T>(`${this.actionUrl}/${body.id}`, body)
      .pipe(catchError((error: any) => throwError(error)));
  }

  update(params: any, body: any): Observable<T> {
    return this.http
      .put<T>(`${this.actionUrl}`, body, { params })
      .pipe(catchError((error: any) => throwError(error)));
  }


  getInvoice(id: any): Observable<T> {
    return this.http.get<T>(`${this.actionUrl}/${id}`).pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );
  }

  exportPDF(id:number): Observable<Blob>{
    return this.http.get(`${this.actionUrl}/download/${id}`,{ responseType : "blob" })
    .pipe(
      catchError((error: any) => {
        return throwError(error);
      })
    );

  }
}
