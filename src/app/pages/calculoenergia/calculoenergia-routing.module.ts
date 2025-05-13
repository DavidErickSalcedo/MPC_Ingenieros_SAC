import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicPageModule } from 'ionic-angular';
import { CalculoenergiaPage } from './calculoenergia.page';

const routes: Routes = [
  {
    path: '',
    component: CalculoenergiaPage
  }
];

@NgModule({
  declarations: [
  calculoenergia,
  ],
  imports: [
           IonicPageModule.forChild(calculoenergia),
           ],[RouterModule.forChild(routes)],
  exports: [RouterModule],[menu_artefactos
           ]
})
export class CalculoenergiaPageRoutingModule {}



