import { DashboardComponent } from './dashboard/dashboard.component';

import { Routes } from '@angular/router';

export const DashboardRoutes: Routes = [

  {
		path: '',
		children: [
			{
				path: '',
				component: DashboardComponent,
				data: {
					title: 'Tableau de bord',
					urls: [
						{ title: 'Tableau de bord'  , url: '/dashboard'},
						{ title: 'Tableau de bord' }
					]
				}
			}
    ]
  }
];