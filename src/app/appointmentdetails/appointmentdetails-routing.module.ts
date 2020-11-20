import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentdetailsPage } from './appointmentdetails.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentdetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentdetailsPageRoutingModule {}
