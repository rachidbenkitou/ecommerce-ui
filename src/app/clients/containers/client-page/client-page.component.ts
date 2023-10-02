import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActionsService} from "../../../shared/services/actions.service";
import {NavigationEnd, Router} from "@angular/router";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.scss']
})
export class ClientPageComponent implements OnInit {

  clickActionSubscription: Subscription;
  loading: boolean = false
  currentRoute!: string
  active: number = 1;

  constructor(private clientService: ClientService,
              public dataService: DataService,
              private modalService: NgbModal,
              private actionsService: ActionsService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {

    this.clickActionSubscription = this.actionsService.getAddEvent().subscribe((ev) => {

    })

    router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    }));

  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.clickActionSubscription.unsubscribe()
  }

  isActiveRoute() {
    if (this.currentRoute === '/clients/search') {
      this.active = 1
    }
  }

  ngOnInit(): void {
    this.clientService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()
    })
    this.isActiveRoute()
  }
}
