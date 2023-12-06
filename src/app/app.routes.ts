import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { PreloadAllModules, RouterModule} from '@angular/router';
export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'exercise1',
    loadComponent: () => import('./exercise1/exercise1.page').then( m => m.Exercise1Page)
  },
  {
    path: 'exercise2',
    loadComponent: () => import('./exercise2/exercise2.page').then( m => m.Exercise2Page)
  },
  {
    path: 'exercise3',
    loadComponent: () => import('./exercise3/exercise3.page').then( m => m.Exercise3Page)
  },
  {
    path: 'exercise4',
    loadComponent: () => import('./exercise4/exercise4.page').then( m => m.Exercise4Page)
  },
  {
    path: 'exercise5',
    loadComponent: () => import('./exercise5/exercise5.page').then( m => m.Exercise5Page)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }