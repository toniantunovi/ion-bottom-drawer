import { __decorate, __metadata } from 'tslib';
import { EventEmitter, Input, Output, Component, ElementRef, Renderer2, NgModule } from '@angular/core';
import { DomController, Platform, IonicModule } from '@ionic/angular';
import * as Hammer from 'hammerjs';
import { DIRECTION_VERTICAL } from 'hammerjs';

var DrawerState;
(function (DrawerState) {
    DrawerState[DrawerState["Bottom"] = 0] = "Bottom";
    DrawerState[DrawerState["Docked"] = 1] = "Docked";
    DrawerState[DrawerState["Top"] = 2] = "Top";
})(DrawerState || (DrawerState = {}));

let IonBottomDrawerComponent = class IonBottomDrawerComponent {
    constructor(_element, _renderer, _domCtrl, _platform) {
        this._element = _element;
        this._renderer = _renderer;
        this._domCtrl = _domCtrl;
        this._platform = _platform;
        this.dockedHeight = 50;
        this.shouldBounce = true;
        this.disableDrag = false;
        this.distanceTop = 0;
        this.transition = '0.25s ease-in-out';
        this.state = DrawerState.Bottom;
        this.minimumHeight = 0;
        this.stateChange = new EventEmitter();
        this._BOUNCE_DELTA = 30;
    }
    ngAfterViewInit() {
        this._renderer.setStyle(this._element.nativeElement.querySelector('.ion-bottom-drawer-scrollable-content :first-child'), 'touch-action', 'none');
        this._setDrawerState(this.state);
        const hammer = new Hammer(this._element.nativeElement);
        hammer.get('pan').set({ enable: true, direction: DIRECTION_VERTICAL });
        hammer.on('pan panstart panend', (ev) => {
            if (this.disableDrag) {
                return;
            }
            switch (ev.type) {
                case 'panstart':
                    this._handlePanStart();
                    break;
                case 'panend':
                    this._handlePanEnd(ev);
                    break;
                default:
                    this._handlePan(ev);
            }
        });
    }
    ngOnChanges(changes) {
        if (!changes.state) {
            return;
        }
        this._setDrawerState(changes.state.currentValue);
    }
    _setDrawerState(state) {
        this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
        switch (state) {
            case DrawerState.Bottom:
                this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
                break;
            case DrawerState.Docked:
                this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
                break;
            default:
                this._setTranslateY(this.distanceTop + 'px');
        }
    }
    _handlePanStart() {
        this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
    }
    _handlePanEnd(ev) {
        if (this.shouldBounce && ev.isFinal) {
            this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
            switch (this.state) {
                case DrawerState.Docked:
                    this._handleDockedPanEnd(ev);
                    break;
                case DrawerState.Top:
                    this._handleTopPanEnd(ev);
                    break;
                default:
                    this._handleBottomPanEnd(ev);
            }
        }
        this.stateChange.emit(this.state);
    }
    _handleTopPanEnd(ev) {
        if (ev.deltaY > this._BOUNCE_DELTA) {
            this.state = DrawerState.Docked;
        }
        else {
            this._setTranslateY(this.distanceTop + 'px');
        }
    }
    _handleDockedPanEnd(ev) {
        const absDeltaY = Math.abs(ev.deltaY);
        if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
            this.state = DrawerState.Top;
        }
        else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
            this.state = DrawerState.Bottom;
        }
        else {
            this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
        }
    }
    _handleBottomPanEnd(ev) {
        if (-ev.deltaY > this._BOUNCE_DELTA) {
            this.state = DrawerState.Docked;
        }
        else {
            this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
        }
    }
    _handlePan(ev) {
        const pointerY = ev.center.y;
        this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
        if (pointerY > 0 && pointerY < this._platform.height()) {
            if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                const newTop = this._startPositionTop + ev.deltaY;
                if (newTop >= this.distanceTop) {
                    this._setTranslateY(newTop + 'px');
                }
                else if (newTop < this.distanceTop) {
                    this._setTranslateY(this.distanceTop + 'px');
                }
                if (newTop > this._platform.height() - this.minimumHeight) {
                    this._setTranslateY((this._platform.height() - this.minimumHeight) + 'px');
                }
            }
        }
    }
    _setTranslateY(value) {
        this._domCtrl.write(() => {
            this._renderer.setStyle(this._element.nativeElement, 'transform', 'translateY(' + value + ')');
        });
    }
};
__decorate([
    Input(),
    __metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "dockedHeight", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "shouldBounce", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "disableDrag", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "distanceTop", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "transition", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], IonBottomDrawerComponent.prototype, "state", void 0);
__decorate([
    Input(),
    __metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "minimumHeight", void 0);
__decorate([
    Output(),
    __metadata("design:type", EventEmitter)
], IonBottomDrawerComponent.prototype, "stateChange", void 0);
IonBottomDrawerComponent = __decorate([
    Component({
        selector: 'ion-bottom-drawer',
        template: "<ion-content class=\"ion-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</ion-content>\n",
        styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}"]
    }),
    __metadata("design:paramtypes", [ElementRef,
        Renderer2,
        DomController,
        Platform])
], IonBottomDrawerComponent);

let IonBottomDrawerModule = class IonBottomDrawerModule {
};
IonBottomDrawerModule = __decorate([
    NgModule({
        declarations: [IonBottomDrawerComponent],
        imports: [IonicModule],
        exports: [IonBottomDrawerComponent]
    })
], IonBottomDrawerModule);

/**
 * Generated bundle index. Do not edit.
 */

export { DrawerState, IonBottomDrawerModule, IonBottomDrawerComponent as ɵa };
//# sourceMappingURL=ion-bottom-drawer.js.map
