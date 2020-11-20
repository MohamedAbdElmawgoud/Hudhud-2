import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulefilterPageRoutingModule } from './schedulefilter-routing.module';

import { SchedulefilterPage } from './schedulefilter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulefilterPageRoutingModule
  ],
  declarations: [SchedulefilterPage]
})
export class SchedulefilterPageModule {}
