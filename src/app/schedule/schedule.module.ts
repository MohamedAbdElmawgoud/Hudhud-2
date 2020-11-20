import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SchedulePageRoutingModule } from './schedule-routing.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { SchedulePage } from './schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
