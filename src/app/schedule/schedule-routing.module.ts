import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SchedulePage } from './schedule.page';
import { NgxDatatableModule} from '@swimlane/ngx-datatable';

const routes: Routes = [
  {
    path: '',
    component: SchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)
  ,
  NgxDatatableModule],
  
  exports: [RouterModule],
})

export class SchedulePageRoutingModule {}
