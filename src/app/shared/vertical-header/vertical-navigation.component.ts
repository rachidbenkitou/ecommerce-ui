import { MenuService } from './../services/menu.service';
import { environment } from './../../../environments/environment';
import { DataService } from './../services/data.service';
import { Router } from '@angular/router';
import { AuthService } from './../../auth/services/auth.service';
import { Component, AfterViewInit, EventEmitter, Output, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';
import { TranslateService } from '@ngx-translate/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ConfigService } from '../services/config.service';

declare var $: any;

@Component({
  selector: 'app-vertical-navigation',
  templateUrl: './vertical-navigation.component.html'
})
export class VerticalNavigationComponent implements OnInit, AfterViewInit {
  @Output() toggleSidebar = new EventEmitter<void>();

  public config: PerfectScrollbarConfigInterface = {};

  public showSearch = false;

  // This is for Notifications
  // tslint:disable-next-line:ban-types
  notifications: Object[] = [
    {
      btn: 'btn-danger',
      icon: 'ti-link',
      title: 'Luanch Admin',
      subject: 'Just see the my new admin!',
      time: '9:30 AM'
    },
    {
      btn: 'btn-success',
      icon: 'ti-calendar',
      title: 'Event today',
      subject: 'Just a reminder that you have event',
      time: '9:10 AM'
    },
    {
      btn: 'btn-info',
      icon: 'ti-settings',
      title: 'Settings',
      subject: 'You can customize this template as you want',
      time: '9:08 AM'
    },
    {
      btn: 'btn-primary',
      icon: 'ti-user',
      title: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];

  // This is for Mymessages
  // tslint:disable-next-line:ban-types
  mymessages: Object[] = [
    {
      useravatar: 'assets/images/users/1.png',
      status: 'online',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:30 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'busy',
      from: 'Sonu Nigam',
      subject: 'I have sung a song! See you at',
      time: '9:10 AM'
    },
    {
      useravatar: 'assets/images/users/2.jpg',
      status: 'away',
      from: 'Arijit Sinh',
      subject: 'I am a singer!',
      time: '9:08 AM'
    },
    {
      useravatar: 'assets/images/users/4.jpg',
      status: 'offline',
      from: 'Pavan kumar',
      subject: 'Just see the my admin!',
      time: '9:00 AM'
    }
  ];


  public selectedLanguage: any = {
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  }

  public languages: any[] = [{
    language: 'English',
    code: 'en',
    type: 'US',
    icon: 'us'
  },
  {
    language: 'French',
    code: 'fr',
    icon: 'fr'
  },
  {
    language: 'Spanish',
    code: 'es',
    icon: 'es'
  },
  {
    language: 'German',
    code: 'de',
    icon: 'de'
  }]
  fullName: string = "";
  username: string = "";
  menuList: any[] = []
  basesaasConfig:any
  public appUrl = environment.appUrl
  // tslint:disable-next-line:max-line-length
  constructor(private modalService: NgbModal, private translate: TranslateService, private authService: AuthService, private router: Router, private dataService: DataService, private menuService: MenuService,private configService: ConfigService) {
    this.fullName = dataService.currentUser.firstName + " " + dataService.currentUser.lastName
    this.username = dataService.currentUser.username
    //translate.setDefaultLang('en');

    /*
    this.configService.getConfig().subscribe(data =>{
      this.basesaasConfig = data
    })
     */
  }

  ngOnInit(): void {
    this.getMenuList()
  }

  getMenuList() {
  }
  ngAfterViewInit() { }

  changeLanguage(lang: any) {
    this.translate.use(lang.code)
    this.selectedLanguage = lang;
  }

  logout() {
    /*
    this.authService.logout().subscribe((data: any) => {
      this.authService.currentUser = {};
      if (environment.production) {
        window.location.href = `${document.location.origin}/login/`
      } else {
        window.location.href = "http://localhost:60645"
      }
    });
     */
  }

}
