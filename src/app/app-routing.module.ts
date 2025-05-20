import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, Router } from '@angular/router';
import { calculoenergiapageModule } from './pages/calculoenergia/calculoenergia.module';

const routes: Routes = [
 
  {
    path: 'menuprincipal',
    loadChildren: () => import('./pages/menuprincipal/menuprincipal.module').then( m => m.MenuprincipalPageModule)
  },
  {
    path: '',
    redirectTo: 'menuprincipal',
    pathMatch: 'full'
  },
  {
    path: 'calculoenergia',
    loadChildren: () => import('./pages/calculoenergia/calculoenergia.module').then(m => m.calculoenergiapageModule)
  }

];

@NgModule({
  imports: [  
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
