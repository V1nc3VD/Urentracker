import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UrenPageRoutingModule } from './uren-routing.module';

import { UrenPage } from './uren.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UrenPageRoutingModule
  ],
  declarations: [UrenPage]
})
export class UrenPageModule {}
