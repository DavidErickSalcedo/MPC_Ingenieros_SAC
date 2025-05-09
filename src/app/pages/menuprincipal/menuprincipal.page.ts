import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from 'ionic-angular'

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
  standalone: false
})
export class MenuprincipalPage implements OnInit {

  constructor(public navCtrl: NavController){

  }
  Ir_menu_artefactos(){
  this.navCtrl.push()
  }
  constructor() { }

  ngOnInit() {
  }

}
