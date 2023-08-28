import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserPictureService {


  UrlPictureUser: string = environment.wimAppServiceUrl + 'user';

  constructor(private http: HttpClient) { }


  public findUserPictureByCriteria( userId : number): Observable<any[]> {
    let userIdPart : string  = ''
    let existedCriteria : boolean = false

    if ( userId !== undefined  && userId !== null  ) {
      userIdPart = '?userId=' + userId ;
      existedCriteria = true ;
    }
    return this.http.get<any[]>(`${this.UrlPictureUser}/usrUserPicture` + userId );
  }

  public findUserPictureById( id : number ): Observable<any> {
    return this.http.get<any>(`${this.UrlPictureUser}/usrUserPicture/`+ id);
  }

  public persistUserPicture(picture: any): Observable<any> {
    return this.http.post<any>(`${this.UrlPictureUser}/usrUserPicture`,picture);
  }

  public updateUserPicture(pictureId: number,picture?: any ): Observable<any> {
    return this.http.put<any>(`${this.UrlPictureUser}/usrUserPicture/${pictureId}`,picture);
  }

  public deleteUserPicture(pictureId: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlPictureUser}/usrUserPicture/${pictureId}`);
  }

  public findUserPictureByUserId( userId : number ): Observable<any> {
    return this.http.get<any>(`${this.UrlPictureUser}/usrUserPictureByUserId/`+ userId);
  }
}
