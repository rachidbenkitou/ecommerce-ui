import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements AfterViewInit{
  @ViewChild('searchButton') searchButton!: ElementRef;
  ngAfterViewInit(): void {
  }

}

