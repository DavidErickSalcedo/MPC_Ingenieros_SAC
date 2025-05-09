import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { menu_artefactos } from './menu_artefactos';

@NgModule({
declarations: [
menu_artefactos,
],
imports: [
IonicPageModule.forChild(menu_artefactos),
],
exports: [
menu_artefactos
]
})
export class menu_artefactosModule{}
