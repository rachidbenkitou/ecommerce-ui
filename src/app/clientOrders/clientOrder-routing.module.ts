import {Routes} from '@angular/router';
import {ClientOrderPageComponent} from "./containers/client-order-page/client-order-page.component";
import {ClientOrderSearchComponent} from "./components/client-order-search/client-order-search.component";
import {SaleSearchComponent} from "./components/sale-search/sale-search.component";
import {ClientOrderDetailsListComponent} from "./components/client-order-details-list/client-order-details-list.component";
import {SaleDetailsListComponent} from "./components/sale-details-list/sale-details-list.component";

export const ClientOrderRoutes: Routes = [
  {
    path: '',
    component: ClientOrderPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'orders'
      },
      {
        path: 'orders',
        component: ClientOrderSearchComponent,
        data: {
          title: 'Client orders management',
          page: 'clientOrder',
          addButton: false
        },
      },
      {
        path: 'sales',
        component: SaleSearchComponent,
        data: {
          title: 'Sales management',
          page: 'sale',
          addButton: false
        },
      },
    ],
  },
  {
    path: ':id',
    component: ClientOrderDetailsListComponent,
    data: {
      title: 'Client order details',
    }
  },
  {
    path: 'sale/:id',
    component: SaleDetailsListComponent,
    data: {
      title: 'Sale details',
    }
  },
];
