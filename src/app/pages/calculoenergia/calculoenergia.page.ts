import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController, NavParams } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-calculoenergia',
  templateUrl: './calculoenergia.page.html',
  styleUrls: ['./calculoenergia.page.scss'],
  standalone: false
})
export class calculoenergiapage implements OnInit {

  constructor(private router: Router){
  }

  ir_menu_artefactos() {
    this.router.navigate(['calculoenergia']);
  }

  ngOnInit() {
  }

}


