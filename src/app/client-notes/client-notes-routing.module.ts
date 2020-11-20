import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientNotesPage } from './client-notes.page';

const routes: Routes = [
  {
    path: '',
    component: ClientNotesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClientNotesPageRoutingModule {}
