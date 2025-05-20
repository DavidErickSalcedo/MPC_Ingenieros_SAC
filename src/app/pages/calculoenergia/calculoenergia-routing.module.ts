import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { calculoenergiapage } from './calculoenergia.page';
import { MenuprincipalPage } from '../menuprincipal/menuprincipal.page';

const routes: Routes = [

  {
    path: 'calculoenergiapageModule',
    loadChildren: () => import('./calculoenergia.module').then(m => m.calculoenergiapageModule)
  }
];

@NgModule({

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class calculoenergiapageRoutingModule {}



