import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, IonicPage, NavParams } from 'ionic-angular';

@Component({
  selector: 'app-calculoenergia',
  templateUrl: './calculoenergia.page.html',
  styleUrls: ['./calculoenergia.page.scss'],
  standalone: false
})
export class Calculoenergia implements OnInit {

  constructor(public navCtrl: NavController, public navParams: navParams){

  }
  ionViewDidLoad(){
  console.log('ionViewDidLoad calculoenergia');
  }
  Ir_menu_calculoenergia(){
  this.navCtrl.push()
  }

  constructor() { }

  ngOnInit() {
  }

}


