import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KitisakPage } from './kitisak.page';

const routes: Routes = [
  {
    path: '',
    component: KitisakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KitisakPageRoutingModule {}
