import { isStandalone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculoenergiaPageRoutingModule } from './calculoenergia-routing.module';

import { Calculoenergia } from './calculoenergia';
import { SharedModule } from 'src/app/shared/shared.module';

import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

@NgModule({
declarations: [
calculoenergia,
],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculoenergiaPageRoutingModule,
    SharedModule,
    [
    IonicPageModule.forChild(Calculoenergia)
    ]
  ],
  exports: [
  Calculoenergia
           ]
})
export class CalculoenergiaModule {}





