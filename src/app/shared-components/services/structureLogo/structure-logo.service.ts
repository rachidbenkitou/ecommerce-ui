import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StructureLogoService {

  UrlPictureStructure: string = environment.wimAppServiceUrl + 'structure';

  constructor(private http: HttpClient) { }

  public findStructureLogoByCriteria( structureId : number): Observable<any[]> {
    let structureIdPart : string  = ''
   // let existedCriteria : boolean = false

    if ( structureId !== undefined  && structureId !== null && structureId !== 0 ) {
      structureIdPart = '?structureId=' + structureId ;
    }
    return this.http.get<any[]>(`${this.UrlPictureStructure}/strStructureLogo` + structureIdPart);
  }

  public findStructureLogoById( id : number ): Observable<any> {
    return this.http.get<any>(`${this.UrlPictureStructure}/strStructureLogo/`+ id);
  }

  public persistStructureLogo(logo: any): Observable<any> {
    return this.http.post<any>(`${this.UrlPictureStructure}/strStructureLogo`,logo);
  }

  public updateStructureLogo(logoId: number,logo?: any ): Observable<any> {
    return this.http.put<any>(`${this.UrlPictureStructure}/strStructureLogo/${logoId}`,logo);
  }

  public deleteStructureLogo(logoId: number): Observable<void> {
    return this.http.delete<void>(`${this.UrlPictureStructure}/strStructureLogo/${logoId}`);
  }

  public findStructureLogoByStructureId( structureId : number ): Observable<any> {
    return this.http.get<any>(`${this.UrlPictureStructure}/strStructureLogoByStructureId/`+ structureId);
  }
}
