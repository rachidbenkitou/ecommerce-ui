import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-alert-info',
  templateUrl: './alert-info.component.html',
  styleUrls: ['./alert-info.component.scss']
})
export class AlertInfoComponent implements OnInit {

  @Input() source : any;
  @Input() message : any;
  @Output() closeAlert : EventEmitter<any> = new EventEmitter()
  //@Output() onAddRegistrationModal : EventEmitter<any> = new EventEmitter()

  constructor() { }

  close() {
    if(this.source !== undefined || this.source !== 'registration' ){
      this.closeAlert.emit(this.source)
    }else{
      this.closeAlert.emit()
    }

  }

  ngOnInit(): void {
  }

}
