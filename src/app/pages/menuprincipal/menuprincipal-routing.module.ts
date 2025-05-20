import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuprincipalPage } from './menuprincipal.page';
import { calculoenergiapage } from '../calculoenergia/calculoenergia.page';

const routes: Routes = [
  {
    path: '',
    component: MenuprincipalPage
  },
  {
    path: 'calculoenergia',
    component: calculoenergiapage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuprincipalPageRoutingModule {}
