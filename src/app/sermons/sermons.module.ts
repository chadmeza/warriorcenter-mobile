import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SermonsPageRoutingModule } from './sermons-routing.module';

import { SermonsPage } from './sermons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SermonsPageRoutingModule
  ],
  declarations: [SermonsPage]
})
export class SermonsPageModule {}
