import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html'
})
export class NotfoundComponent implements OnInit{
  home:string = ""
  ngOnInit() {
    this.home = document.location.origin
  }
}
