import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  Url: string = environment.wimAppServiceUrl + 'dashboard';

  constructor(private http: HttpClient) {
  }

}
