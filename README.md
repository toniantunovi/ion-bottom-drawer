# Ionic 3 Bottom Drawer

Bottom drawer component for Ionic 3. Demo can be viewed <a href="https://toniantunovi.github.io/ion-bottom-drawer/"> here</a>.

# Installation

```
$ npm i ion-bottom-drawer --save
```

# API

## Inputs

  - `dockedHeight: number` - Height of the drawer in docked position.
  - `shouldBounce: boolean` - Determines whether the drawer should automatically bounce between docked, closed and top positions.
  - `bounceThreshold: number` - Distance from bottom (pixels) at which the drawer will bounce to docked position. Otherwise it bounces to top position.
  - `distanceTop: number` - Distance from top of fully opened drawer.
  - `hidden: boolean` - When set to false it will close the drawer completely. When set to true it will open it to docked position.

# Behavior
The drawer has three basic states: closed, docked and opened to maximum 'distanceTop' from top of the screen. It will bounce by default which means it will always go to one of three states above. This can be disabled by setting 'shouldBounce' to false.

If 'ion-content' is beneath the drawer it might be bouncing itself. To prevent that add 'no-bounce' attribute.

```html
<ion-content padding no-bounce>
...
</ion-content>
```

# Integration and Usage
First, import the IonBottomDrawerModule to your app:

```typescript
import { IonBottomDrawerModule } from 'ion-bottom-drawer';

@NgModule({
  imports: [
    ...,
    IonBottomDrawerModule
  ],
  ...
})
export class AppModule { }
```

Use it in your component template like this:

```html
<ion-content no-bounce>Component content.<ion-content>

<ion-bottom-drawer [(hidden)]="drawerHidden" [dockedHeight]="dockedHeight" [bounceThreshold]="bounceThreshold" [shouldBounce]="shouldBounce"
  [distanceTop]="distanceTop">
  <div class="drawer-content">
    Bottom Drawer Content
  </div>
</ion-bottom-drawer>
```

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  
This component is distributed under the MIT License.
