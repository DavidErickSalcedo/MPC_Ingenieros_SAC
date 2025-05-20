import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menuprincipal',
  templateUrl: './menuprincipal.page.html',
  styleUrls: ['./menuprincipal.page.scss'],
  standalone: false,
})
export class MenuprincipalPage implements OnInit {

  constructor(private router:Router){

  }
  ir_menu_artefactos() {
    this.router.navigate(['calculoenergia']);
  }

  ngOnInit() {
  }

}
