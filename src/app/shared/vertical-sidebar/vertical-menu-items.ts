import {RouteInfo} from './vertical-sidebar.metadata';

export const ROUTES: RouteInfo[] = [
  {
    path: "",
    title: "Bonketo",
    icon: "mdi mdi-dots-horizontal",
    class: "nav-small-cap",
    extralink: true,
    submenu: [],
  },
  {
    path: '/dashboard',
    title: 'Dashboard',
    icon: 'Home',
    class: '',
    extralink: false,
    submenu: []
  },
  {
    path: '/products',
    title: 'Products',
    icon: 'archive',
    class: '',
    extralink: false,
    submenu: []
  },

  {
    path: '/categories',
    title: 'Categories',
    icon: 'codepen',
    class: '',
    extralink: false,
    submenu: []
  },

];
