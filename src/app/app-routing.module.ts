import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'sliders',
    loadChildren: () => import('./sliders/sliders.module').then( m => m.SlidersPageModule)
  },
  {
    path: 'forget-pass',
    loadChildren: () => import('./forget-pass/forget-pass.module').then( m => m.ForgetPassPageModule)
  },
  {
    path: 'verify',
    loadChildren: () => import('./verify/verify.module').then( m => m.VerifyPageModule)
  },{
    path: 'login',
    
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'product-detail',
    loadChildren: () => import('./product-detail/product-detail.module').then( m => m.ProductDetailPageModule)
  },
  {
    path: 'complaints',
    loadChildren: () => import('./complaints/complaints.module').then( m => m.ComplaintsPageModule)
  },
  {
    path: 'about-us',
    loadChildren: () => import('./about-us/about-us.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'service-detail', data: {id : ''},
    loadChildren: () => import('./service-detail/service-detail.module').then( m => m.ServiceDetailPageModule)
  },
  {
    path: 'appointment',
    loadChildren: () => import('./appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'appointment-emp',
    loadChildren: () => import('./appointment-emp/appointment-emp.module').then( m => m.AppointmentEmpPageModule)
  },
  {
    path: 'admin-notes',
    loadChildren: () => import('./admin-notes/admin-notes.module').then( m => m.AdminNotesPageModule)
  },
  {
    path: 'client-notes',
    loadChildren: () => import('./client-notes/client-notes.module').then( m => m.ClientNotesPageModule)
  },
  {
    path: 'send-location-on-map',
    loadChildren: () => import('./send-location-on-map/send-location-on-map.module').then( m => m.SendLocationOnMapPageModule)
  },
  
  
    
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
