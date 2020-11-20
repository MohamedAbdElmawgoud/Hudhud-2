import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulefilterPage } from './schedulefilter.page';

const routes: Routes = [
  {
    path: '',
    component: SchedulefilterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SchedulefilterPageRoutingModule {}
