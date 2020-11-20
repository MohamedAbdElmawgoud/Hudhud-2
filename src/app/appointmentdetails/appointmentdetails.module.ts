import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentdetailsPageRoutingModule } from './appointmentdetails-routing.module';

import { AppointmentdetailsPage } from './appointmentdetails.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentdetailsPageRoutingModule
  ],
  declarations: [AppointmentdetailsPage]
})
export class AppointmentdetailsPageModule {}
