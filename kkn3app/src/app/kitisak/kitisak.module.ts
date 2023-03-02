import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KitisakPageRoutingModule } from './kitisak-routing.module';

import { KitisakPage } from './kitisak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KitisakPageRoutingModule
  ],
  declarations: [KitisakPage]
})
export class KitisakPageModule {}
