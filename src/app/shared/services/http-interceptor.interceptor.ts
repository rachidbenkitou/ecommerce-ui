import { ToastrService } from 'ngx-toastr';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class HttpInterceptorInterceptor implements HttpInterceptor {


  loginUrl: string = environment.wimAppServiceUrl + '/auth/login';
  currentUserUrl: string = environment.wimAppServiceUrl + '/auth/current';
  logoutUrl: string = environment.wimAppServiceUrl + '/auth/logout';


  constructor(private toastr: ToastrService) {

  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const reqParams: any = {
      withCredentials: true // to use cookies on headers
    };
    const isIEOrEdge = /msie\s|trident\/|edge\//i.test(
      window.navigator.userAgent
    );
    if (isIEOrEdge) {
      // Prevent IE11 caching GET call
      reqParams.headers = request.headers
        .set('Cache-Control', 'no-cache')
        .set('Pragma', 'no-cache')
        .set('Expires', 'Sat, 01 Jan 2000 00:00:00 GMT')
        .set('If-Modified-Since', '0');
    }
    request = request.clone(reqParams);

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            if (this.loginUrl === request.url) {
              return throwError(error.error);
            } else {
              // this.store.dispatch(new AuthActions.LoginRedirect());
            }
          } else if (error.status === 500) {
            this.toastr.error(error.error.message || 'Erreur serveur, Merci de contacter votre administrateur', 'Oops!');
            // this.store.dispatch(new ErrorActions.AddGlobalError(error.error.message || 'Erreur serveur, Merci de contacter votre administrateur'));
            return throwError(error.error);
          } else {
            this.toastr.error(error.error.message, 'Oops!');

            // this.store.dispatch(new ErrorActions.AddGlobalError(error.error.message));
            return throwError(error.error);
          }
        }
        console.log(error);
        const message = error!.error?.message  ? error!.error?.message : 'Erreur serveur, Merci de contacter votre administrateur';
        this.toastr.error(message, 'Oops!');
        return throwError(message);
      })
    );
  }

}
