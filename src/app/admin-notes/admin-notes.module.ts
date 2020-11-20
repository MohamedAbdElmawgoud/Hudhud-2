import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdminNotesPageRoutingModule } from './admin-notes-routing.module';

import { AdminNotesPage } from './admin-notes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdminNotesPageRoutingModule
  ],
  declarations: [AdminNotesPage]
})
export class AdminNotesPageModule {}
