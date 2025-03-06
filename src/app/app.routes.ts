import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./layout/layout.page').then(m => m.LayoutPage),
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        title: 'Home',
        loadComponent: () => import('./home/home.page').then(m => m.HomePage)
      },
    ]
  }
];
