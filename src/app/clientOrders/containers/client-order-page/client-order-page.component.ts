import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActionsService} from "../../../shared/services/actions.service";
import {NavigationEnd, Router} from "@angular/router";
import {ClientOrderService} from "../../services/client-order.service";

@Component({
  selector: 'app-client-order-page',
  templateUrl: './client-order-page.component.html',
  styleUrls: ['./client-order-page.component.scss']
})
export class ClientOrderPageComponent implements OnInit, OnDestroy {
  clickActionSubscription: Subscription;
  loading: boolean = false
  currentRoute!: string
  active: number = 1;

  constructor(private clientOrderService: ClientOrderService,
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
    if (this.currentRoute === '/clientOrders/orders') {
      this.active = 1
    } else if (this.currentRoute === '/clientOrders/sales') {
      this.active = 2
    }
  }

  ngOnInit(): void {
    this.clientOrderService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()
    })
    this.isActiveRoute()
  }

}
