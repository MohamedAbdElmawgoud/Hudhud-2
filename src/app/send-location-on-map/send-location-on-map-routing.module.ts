import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SendLocationOnMapPage } from './send-location-on-map.page';

const routes: Routes = [
  {
    path: '',
    component: SendLocationOnMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SendLocationOnMapPageRoutingModule {}
