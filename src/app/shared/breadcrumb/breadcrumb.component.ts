import { ActionsService } from './../services/actions.service';
import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router, NavigationEnd, ActivatedRoute, Data } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs/operators';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html'
})
export class BreadcrumbComponent implements OnInit {
  url: string = ''
  addButtonText = 'Ajouter'
  showAddButton: boolean = false
  showSecondAddButton: boolean = false
  pageInfo: Data = Object.create(null);
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private actionsService: ActionsService,
    private titleService: Title
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .pipe(map(() => this.activatedRoute))
      .pipe(
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        })
      )
      .pipe(filter(route => route.outlet === 'primary'))
      .pipe(mergeMap(route => route.data))
      .subscribe(event => {
        // this.titleService.setTitle(event['title']);
        this.pageInfo = event;
        this.url = event.page
        this.showAddButton = event.addButton
        this.showSecondAddButton = event.secondAddButton
        if (event.hasOwnProperty('secondAddButton')) {          
          this.addButtonText = event.title
        }
        else if (!event.hasOwnProperty('secondAddButton')) {          
          this.addButtonText = 'Ajouter'
        }

      });
  }
  ngOnInit() {

  }

  onAdd() {
    this.actionsService.sendAddEvent(this.url);
  }

  onSecondAdd() {
    this.actionsService.sendSecondAddEvent(this.url);
  }
}
