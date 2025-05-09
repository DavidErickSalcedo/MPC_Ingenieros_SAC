import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
selector: 'page-pagina2',
templateUrl: 'menu_artefactos.html'
})
export class menu_artefactos{
constructor(public navCtrl: NavController, public navParams: navParams){
}
ionViewDidLoad(){
console.log('ionViewDidLoad menu_artefactos');
}
}
