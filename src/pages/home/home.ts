import { Component, ChangeDetectorRef } from '@angular/core';

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

  constructor(private ref: ChangeDetectorRef) { }

  drawerToggle(isHidden: boolean) {
    this.drawerHidden = isHidden;
    this.ref.detectChanges();
  }
}
