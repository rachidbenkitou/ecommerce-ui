import {Routes} from '@angular/router';
import {ClientPageComponent} from "./containers/client-page/client-page.component";
import {ClientSearchComponent} from "./compoentns/client-search/client-search.component";

export const ClientRoutes: Routes = [
  {
    path: '',
    component: ClientPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        component: ClientSearchComponent,
        data: {
          title: 'Client  management',
          page: 'client',
          addButton: false
        },
      }
    ],
  },
];
