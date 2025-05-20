import { isStandalone, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { calculoenergiapageRoutingModule } from './calculoenergia-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

import { calculoenergiapage } from './calculoenergia.page';


@NgModule({

  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule
    
  ]
})
export class calculoenergiapageModule {}





