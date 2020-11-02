import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClientNotesPageRoutingModule } from './client-notes-routing.module';

import { ClientNotesPage } from './client-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClientNotesPageRoutingModule
  ],
  declarations: [ClientNotesPage]
})
export class ClientNotesPageModule {}
