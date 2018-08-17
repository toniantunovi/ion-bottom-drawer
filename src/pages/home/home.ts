import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  drawerHidden = false;
  shouldBounce = true;
  dockedHeight = 150;
  bounceThreshold = 500;
  distanceTop = 56;

  constructor(public navCtrl: NavController) { }
}
