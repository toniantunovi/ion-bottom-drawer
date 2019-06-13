# Ionic 4 Bottom Drawer

Bottom drawer component for Ionic 4. Demo can be viewed <a target="_blank" href="https://toniantunovi.github.io/ion-bottom-drawer/">here</a>.

# Installation

```
$ npm i ion-bottom-drawer --save
```

## Dependencies
Peer dependencies hammerjs@2.0.8 and @types/hammerjs@2.0.36 can be installed with:
```
$ npm i hammerjs@2.0.8 --save
$ npm i @types/hammerjs@2.0.36 --save
```

# API

## Inputs

  - `dockedHeight: number` - Height of the drawer in docked position. Default value: `50`.
  - `shouldBounce: boolean` - Determines whether the drawer should automatically bounce between docked, closed and top positions. Default value: `True`.
  - `disableDrag: boolean` - Disables drawer drag. Default value: `False`.
  - `distanceTop: number` - Distance from top of fully opened drawer. Default value: `0`.
  - `transition: string` - Specify custom CSS transition for bounce movement. Default value: `0.25s ease-in-out`.
  - `state: DrawerState` - Current state of the drawer. Possible values: DrawerState.Bottom, DrawerState.Docked, DrawerState.Top. Default value: `DrawerState.Docked`.
  - `minimumHeight: number` - Height of the drawer when in closed state calculated from the bottom of the screen. Default value: `0`.


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

<ion-bottom-drawer [(state)]="drawerState" [minimumHeight]="minimumHeight" [dockedHeight]="dockedHeight"
  [shouldBounce]="shouldBounce" [distanceTop]="distanceTop">
  <div class="drawer-content">
    Bottom Drawer Content
  </div>
</ion-bottom-drawer>
```

# Ionic 3
Last version which supported Ionic 3 was 1.0.3 and can be installed by running the following command:
```
$ npm i ion-bottom-drawer@1.0.3 --save
```

# License

The MIT License (MIT)

Copyright (c) 2018 Toni Antunovic

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
