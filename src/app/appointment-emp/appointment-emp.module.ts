import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentEmpPageRoutingModule } from './appointment-emp-routing.module';

import { AppointmentEmpPage } from './appointment-emp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentEmpPageRoutingModule
  ],
  declarations: [AppointmentEmpPage]
})
export class AppointmentEmpPageModule {}
