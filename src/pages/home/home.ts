import { Component } from '@angular/core';
import { DrawerState } from '../../modules/ion-bottom-drawer/drawer-state';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  shouldBounce = true;
  dockedHeight = 150;
  bounceThreshold = 500;
  distanceTop = 56;
  drawerState = DrawerState.Docked;
  states = DrawerState;
  minimumHeight = 0;
}
