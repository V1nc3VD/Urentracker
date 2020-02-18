import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrenPage } from './uren.page';

const routes: Routes = [
  {
    path: '',
    component: UrenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UrenPageRoutingModule {}
