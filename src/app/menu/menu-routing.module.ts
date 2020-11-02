import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
   {
      path: 'home',
      loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
       
   },
  {
    path: 'schedule',
    loadChildren: () => import('../schedule/schedule.module').then(m => m.SchedulePageModule)
   
  },
  {
    path: 'product',
    loadChildren: () => import('../product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('../profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('../services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('../product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
   
  },
  {
    path: 'complaints',
    loadChildren: () => import('../complaints/complaints.module').then(m => m.ComplaintsPageModule)
   
  },
  {
    path: 'about-us',
    loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsPageModule)
   
  },
   {
        path: 'appointment',
        loadChildren: () => import('../appointment/appointment.module').then(m => m.AppointmentPageModule)
    },
   {
        path: 'appointment-emp',
        loadChildren: () => import('../appointment-emp/appointment-emp.module').then(m => m.AppointmentEmpPageModule)
   },
  {
    path: 'tabs',
    loadChildren: () => import('../tabs/tabs.module').then( m => m.TabsPageModule)
  }
      
    ]
  },
 {
   path :'',
   redirectTo: 'menu'
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
