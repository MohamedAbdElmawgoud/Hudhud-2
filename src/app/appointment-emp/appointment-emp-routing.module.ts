import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentEmpPage } from './appointment-emp.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentEmpPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentEmpPageRoutingModule {}
