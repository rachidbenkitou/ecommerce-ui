import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  private subject = new Subject<any>(); 
  private subject2 = new Subject<any>();
  private yearEvent = new Subject<any>();

  constructor() { }
//EVENT FOR ADD BUTTON
  sendAddEvent(ev: any) {
    this.subject.next(ev);
  }

  getAddEvent(): Observable<any>{ 
    return this.subject.asObservable();
  }
  //EVENT FOR SECOND BUTTON
  sendSecondAddEvent(ev: any) {
    this.subject2.next(ev);
  }

  getSecondAddEvent(): Observable<any>{ 
    return this.subject2.asObservable();
  }
    //EVENT FOR SECOND BUTTON
    sendYearEvent(ev: number) {
      this.yearEvent.next(ev);
    }
  
    getYearEvent(): Observable<number>{ 
      return this.yearEvent.asObservable();
    }

}
