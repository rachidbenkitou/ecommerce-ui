import { environment } from 'src/environments/environment';
import { DataService } from '../../shared/services/data.service';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  public portalUrl = environment.wimAppServiceUrl + "account/";
  constructor(private router: Router,
    private authService: AuthService,
    private dataService: DataService,) {

  }


  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.getCurrentUser()
      .pipe(
        map(user => {
          //console.log(user);
          if (user) {
            this.dataService.currentUser = user;
            if (user.categoryId !== 1) {
              // window.location.href = this.portalUrl
              // return false;
              return true;
            } else {
              return true;
            }
          } else {
            if (environment.production) {
              window.location.href = `${document.location.origin}/login/`
            } else {
              // window.location.href = "http://localhost:60645"
            }
            return false;
          }
        }),
        catchError((err, caught) => {
          if (state.url === "/login") {
            return of(true);
          } else {
            if (environment.production) {
              window.location.href = `${document.location.origin}/login/`
            } else {
              // window.location.href = "http://localhost:60645"
            }
            return of(false);
          }
        }
        )
      );
  }

}
