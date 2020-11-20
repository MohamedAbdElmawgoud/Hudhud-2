import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminNotesPage } from './admin-notes.page';

const routes: Routes = [
  {
    path: '',
    component: AdminNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminNotesPageRoutingModule {}
