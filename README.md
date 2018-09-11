# Ionic 3 Bottom Drawer

<a href="https://antunovic.co/ionic3/component/angular/2018/08/18/bottom-drawer-ionic.html">Bottom drawer component for Ionic 3</a>. Demo can be viewed <a target="_blank" href="https://toniantunovi.github.io/ion-bottom-drawer/">here</a>.

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
  - `hidden: boolean` - When set to true it will close the drawer completely. When set to false it will open it to docked position.

# Behavior
The drawer has three basic states: closed, docked and opened to maximum 'distanceTop' from top of the screen. It will bounce by default which means it will always go to one of three states above. This can be disabled by setting 'shouldBounce' to false.

If 'ion-content' is beneath the drawer it might be bouncing itself while dragging the drawer. To prevent that add 'no-bounce' attribute to ion-content element.

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

The MIT License (MIT)

Copyright (c) 2018 Toni Antunovic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
