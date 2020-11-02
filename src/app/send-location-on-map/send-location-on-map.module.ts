import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SendLocationOnMapPageRoutingModule } from './send-location-on-map-routing.module';

import { SendLocationOnMapPage } from './send-location-on-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SendLocationOnMapPageRoutingModule
  ],
  declarations: [SendLocationOnMapPage]
})
export class SendLocationOnMapPageModule {}
