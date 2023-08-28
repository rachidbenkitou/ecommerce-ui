import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private appname: any = ""

  constructor(private http: HttpClient) {
    if (environment.production) {
      this.appname = 'wimbasesaas'
    } else {
      this.appname = 'wimdrive'

    }
  }


  getConfig(): Observable<any> {
    return this.http.get('assets/config/' + this.appname + '.json');
  }
}
