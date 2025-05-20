import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuprincipalPageRoutingModule } from './menuprincipal-routing.module';

import { MenuprincipalPage } from './menuprincipal.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuprincipalPageRoutingModule,
    SharedModule
  ]
})
export class MenuprincipalPageModule {}
