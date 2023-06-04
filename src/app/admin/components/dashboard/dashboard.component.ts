import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit, OnInit{
  @ViewChildren('sideMenuLinks') sideMenuLinks!: QueryList<ElementRef>;
  ngAfterViewInit() {
    this.initializeSideMenu();
  }

  ngOnInit(): void {
    this.hideSideBar();
    this.switchMode();
  }

  initializeSideMenu(): void {
    this.sideMenuLinks.forEach((item: ElementRef) => {
      const link = item.nativeElement;
      const li = link.parentElement;

      link.addEventListener('click', () => {
        this.sideMenuLinks.forEach((i: ElementRef) => {
          i.nativeElement.parentElement.classList.remove('active');
        });
        li.classList.add('active');
      });
    });
  }

  hideSideBar(): void {
    const menuBar = document.querySelector('#content nav .bx.bx-menu') as HTMLElement;
    const sidebar = document.getElementById('sidebar') as HTMLElement;
    console.log(menuBar);
    console.log(sidebar)
    menuBar.addEventListener('click', () => {
      sidebar.classList.toggle('hide');
    });
  }

  switchMode(){
    const switchMode = document.getElementById('switch-mode') as HTMLInputElement;

    switchMode.addEventListener('change', function () {
      if (this.checked) {
        document.body.classList.add('dark');
      } else {
        document.body.classList.remove('dark');
      }
    });
  }
  }
  


