import {Routes} from '@angular/router';
import {CategoryDetailsComponent} from "./components/category-details/category-details.component";
import {CategorySearchComponent} from "./components/category-search/category-search.component";
import {CategoryPageComponent} from "./containers/category-page/category-page.component";


export const CategoryRoutes: Routes = [

  {
    path: '',
    component: CategoryPageComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'search'
      },
      {
        path: 'search',
        component: CategorySearchComponent,
        data: {
          title: 'Categories management',
          page: 'category',
          addButton: true
        },
      },
    ],
  },
  {
    path: ':id',
    component: CategoryDetailsComponent,
    data: {
      title: 'Category details',
    }
  },
];
