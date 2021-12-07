import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    //   children: [
    //     {
    //       path: 'profile',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
    //         }
    //       ]
    //     },
    //     {
    //       path: 'dashboard',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: () => import('../dashboard/dashboard.module').then(m => m.DashboardPageModule)
    //         }
    //       ]
    //     },
    //     {
    //       path: 'panel',
    //       children: [
    //         {
    //           path: '',
    //           loadChildren: () => import('../panel/panel.module').then(m => m.PanelPageModule)
    //         }
    //       ]
    //     },
    //     {
    //       path: '',
    //       redirectTo: '/app/home',
    //       pathMatch: 'full'
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   redirectTo: '/app/homepage',
    //   pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
