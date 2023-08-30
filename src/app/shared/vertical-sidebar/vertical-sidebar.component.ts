import {DataService} from './../services/data.service';
import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';
import {RouteInfo} from './vertical-sidebar.metadata';
import {VerticalSidebarService} from './vertical-sidebar.service';
import {ConfigService} from '../services/config.service';


@Component({
  selector: 'app-vertical-sidebar',
  templateUrl: './vertical-sidebar.component.html'
})
export class VerticalSidebarComponent {
  @Input() showClass: boolean = false;
  @Output() notify: EventEmitter<boolean> = new EventEmitter<boolean>();
  showMenu = '';
  showSubMenu = '';
  public sidebarnavItems: RouteInfo[] = [];
  path = '';
  fullName: string = "";
  username: string = "";
  basesaasConfig: any

  constructor(private menuServise: VerticalSidebarService, private router: Router, private dataService: DataService, private configService: ConfigService) {
    this.fullName = dataService.currentUser.firstName + " " + dataService.currentUser.lastName
    this.username = dataService.currentUser.username
    this.menuServise.items.subscribe(menuItems => {
      this.sidebarnavItems = menuItems;

      // Active menu
      this.sidebarnavItems.filter(m => m.submenu.filter(
        (s) => {
          if (s.path === this.router.url) {
            this.path = m.title;
          }
        }
      ));
      this.addExpandClass(this.path);
    });

    /*
    this.configService.getConfig().subscribe(data =>{
      this.basesaasConfig = data
      this.sidebarnavItems = this.sidebarnavItems.filter(item => !this.basesaasConfig?.hideMenu.includes(item.path));

      this.basesaasConfig?.renameMenu.forEach(obj2 => {
        const index = this.sidebarnavItems.findIndex(obj1 => obj1.path === obj2.path);
        if (index !== -1) {
          this.sidebarnavItems[index].title = obj2.title;
        }
      });

    })
     */
  }

  addExpandClass(element: any) {
    if (element === this.showMenu) {
      this.showMenu = '0';
    } else {
      this.showMenu = element;
    }
  }

  addActiveClass(element: any) {
    if (element === this.showSubMenu) {
      this.showSubMenu = '0';
    } else {
      this.showSubMenu = element;
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  handleNotify() {
    this.notify.emit(!this.showClass);
  }


}
