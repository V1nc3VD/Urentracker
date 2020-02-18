import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InstellingenPage } from './instellingen.page';

const routes: Routes = [
  {
    path: '',
    component: InstellingenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InstellingenPageRoutingModule {}
