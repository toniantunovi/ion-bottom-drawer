import { __decorate, __metadata } from 'tslib';
import { Input, Output, EventEmitter, Component, ElementRef, Renderer2, NgModule } from '@angular/core';
import { DomController, Platform, IonicModule } from '@ionic/angular';
import * as Hammer from 'hammerjs';
import { DIRECTION_VERTICAL } from 'hammerjs';

var DrawerState;
(function (DrawerState) {
    DrawerState[DrawerState["Bottom"] = 0] = "Bottom";
    DrawerState[DrawerState["Docked"] = 1] = "Docked";
    DrawerState[DrawerState["Top"] = 2] = "Top";
})(DrawerState || (DrawerState = {}));

var IonBottomDrawerComponent = /** @class */ (function () {
    function IonBottomDrawerComponent(_element, _renderer, _domCtrl, _platform) {
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
    IonBottomDrawerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._renderer.setStyle(this._element.nativeElement.querySelector('.ion-bottom-drawer-scrollable-content :first-child'), 'touch-action', 'none');
        this._setDrawerState(this.state);
        var hammer = new Hammer(this._element.nativeElement);
        hammer.get('pan').set({ enable: true, direction: DIRECTION_VERTICAL });
        hammer.on('pan panstart panend', function (ev) {
            if (_this.disableDrag) {
                return;
            }
            switch (ev.type) {
                case 'panstart':
                    _this._handlePanStart();
                    break;
                case 'panend':
                    _this._handlePanEnd(ev);
                    break;
                default:
                    _this._handlePan(ev);
            }
        });
    };
    IonBottomDrawerComponent.prototype.ngOnChanges = function (changes) {
        if (!changes.state) {
            return;
        }
        this._setDrawerState(changes.state.currentValue);
    };
    IonBottomDrawerComponent.prototype._setDrawerState = function (state) {
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
    };
    IonBottomDrawerComponent.prototype._handlePanStart = function () {
        this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
    };
    IonBottomDrawerComponent.prototype._handlePanEnd = function (ev) {
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
    };
    IonBottomDrawerComponent.prototype._handleTopPanEnd = function (ev) {
        if (ev.deltaY > this._BOUNCE_DELTA) {
            this.state = DrawerState.Docked;
        }
        else {
            this._setTranslateY(this.distanceTop + 'px');
        }
    };
    IonBottomDrawerComponent.prototype._handleDockedPanEnd = function (ev) {
        var absDeltaY = Math.abs(ev.deltaY);
        if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
            this.state = DrawerState.Top;
        }
        else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
            this.state = DrawerState.Bottom;
        }
        else {
            this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
        }
    };
    IonBottomDrawerComponent.prototype._handleBottomPanEnd = function (ev) {
        if (-ev.deltaY > this._BOUNCE_DELTA) {
            this.state = DrawerState.Docked;
        }
        else {
            this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
        }
    };
    IonBottomDrawerComponent.prototype._handlePan = function (ev) {
        var pointerY = ev.center.y;
        this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
        if (pointerY > 0 && pointerY < this._platform.height()) {
            if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                var newTop = this._startPositionTop + ev.deltaY;
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
    };
    IonBottomDrawerComponent.prototype._setTranslateY = function (value) {
        var _this = this;
        this._domCtrl.write(function () {
            _this._renderer.setStyle(_this._element.nativeElement, 'transform', 'translateY(' + value + ')');
        });
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
    return IonBottomDrawerComponent;
}());

var IonBottomDrawerModule = /** @class */ (function () {
    function IonBottomDrawerModule() {
    }
    IonBottomDrawerModule = __decorate([
        NgModule({
            declarations: [IonBottomDrawerComponent],
            imports: [IonicModule],
            exports: [IonBottomDrawerComponent]
        })
    ], IonBottomDrawerModule);
    return IonBottomDrawerModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { DrawerState, IonBottomDrawerModule, IonBottomDrawerComponent as ɵa };
//# sourceMappingURL=ion-bottom-drawer.js.map
