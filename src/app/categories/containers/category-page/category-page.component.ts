import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Subject, Subscription} from "rxjs";
import {Title} from "@angular/platform-browser";
import {DataService} from "../../../shared/services/data.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ActionsService} from "../../../shared/services/actions.service";
import {NavigationEnd, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";
import {CategoryAddEditComponent} from "../../components/category-add-edit/category-add-edit.component";

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

  clickActionSubscription: Subscription;
  eventProspSubject: Subject<void> = new Subject<void>();
  screenMode: string | undefined
  loading: boolean = false
  currentRoute!: string
  active: number = 1;

  constructor(private categoryService: CategoryService,
              private titleService: Title,
              public dataService: DataService,
              private modalService: NgbModal,
              private actionsService: ActionsService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) {

    this.clickActionSubscription = this.actionsService.getAddEvent().subscribe((ev) => {

      if (ev === 'category') {
        this.addCategory();
      }
    })
    router.events.subscribe((event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    }));

  }

  addCategory() {
    const dialogRef = this.modalService.open(CategoryAddEditComponent, {
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
      this.categoryService.reload.emit()
    });
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngOnDestroy(): void {
    this.clickActionSubscription.unsubscribe()
  }

  isActiveRoute() {
    if (this.currentRoute === '/categories/search') {
      this.active = 1
    }
  }

  ngOnInit(): void {
    this.categoryService.loading$.subscribe(event => {
      this.loading = event;
      this.changeDetectorRef.detectChanges()
    })
    this.isActiveRoute()
  }


}
