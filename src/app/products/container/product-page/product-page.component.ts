import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subject, Subscription} from 'rxjs';
import {Title} from "@angular/platform-browser";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {Router} from "@angular/router";
import { DataService } from 'src/app/shared/services/data.service';
import { ActionsService } from 'src/app/shared/services/actions.service';


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss']
})
export class ProductPageComponent implements OnInit {

  clickActionSubscription: Subscription;
  eventProspSubject: Subject<void> = new Subject<void>();
  loading: boolean = false
  currentRoute!: string
  permissions: any
  lang!: string

  constructor(private titleService: Title,
              public dataService: DataService,
              private modalService: NgbModal,
              private actionsService: ActionsService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {

    /*    this.clickActionSubscription = this.actionsService.getAddEvent().subscribe((ev) => {
          if (ev === 'supplier') {
            this.addSupplier();
          }
        })

        router.events.subscribe((event => {
          if (event instanceof NavigationEnd) {
            this.currentRoute = event.url;
          }
        }));*/

  }

  addProduct() {
    /*
    const dialogRef = this.modalService.open(ProductAddEditComponent, {
      size: "xl",
      backdrop: 'static',
      keyboard: false,
    });
    const data = {
      operation: "add",
      item: {}
    }
    dialogRef.componentInstance.data = data;
    dialogRef.componentInstance.onAddEdit.subscribe((event: any) => {
      if (event.source === "close") {
        dialogRef.close()
      }
      this.supplierService.reload.emit()
    });

     */
  }


  screenMode: string | undefined


  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    /*
    this.clickActionSubscription.unsubscribe()
     */
  }

  active: number = 1;

  isActiveRoute() {

    if (this.currentRoute === '/product/search') {
      this.active = 1
    }
  }

  ngOnInit(): void {
    /*
    this.supplierService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()

    })

     */
    this.isActiveRoute()
  }

}
