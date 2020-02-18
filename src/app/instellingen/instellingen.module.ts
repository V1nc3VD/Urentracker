import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstellingenPageRoutingModule } from './instellingen-routing.module';

import { InstellingenPage } from './instellingen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstellingenPageRoutingModule
  ],
  declarations: [InstellingenPage]
})
export class InstellingenPageModule {}
