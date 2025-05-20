import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy} from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';

import { MenuprincipalPage } from './pages/menuprincipal/menuprincipal.page';
import { calculoenergiapage } from './pages/calculoenergia/calculoenergia.page';


@NgModule({
  declarations: [AppComponent, MenuprincipalPage, calculoenergiapage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: ErrorHandler, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent]
 
})
export class AppModule {}
