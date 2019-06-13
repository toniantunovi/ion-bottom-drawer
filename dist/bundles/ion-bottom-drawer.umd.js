(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@ionic/angular'), require('hammerjs')) :
    typeof define === 'function' && define.amd ? define('ion-bottom-drawer', ['exports', '@angular/core', '@ionic/angular', 'hammerjs'], factory) :
    (global = global || self, factory(global['ion-bottom-drawer'] = {}, global.ng.core, global.angular, global.Hammer));
}(this, function (exports, core, angular, Hammer) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    (function (DrawerState) {
        DrawerState[DrawerState["Bottom"] = 0] = "Bottom";
        DrawerState[DrawerState["Docked"] = 1] = "Docked";
        DrawerState[DrawerState["Top"] = 2] = "Top";
    })(exports.DrawerState || (exports.DrawerState = {}));

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
            this.state = exports.DrawerState.Bottom;
            this.minimumHeight = 0;
            this.stateChange = new core.EventEmitter();
            this._BOUNCE_DELTA = 30;
        }
        IonBottomDrawerComponent.prototype.ngAfterViewInit = function () {
            var _this = this;
            this._renderer.setStyle(this._element.nativeElement.querySelector('.ion-bottom-drawer-scrollable-content :first-child'), 'touch-action', 'none');
            this._setDrawerState(this.state);
            var hammer = new Hammer(this._element.nativeElement);
            hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_VERTICAL });
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
                case exports.DrawerState.Bottom:
                    this._setTranslateY('calc(100vh - ' + this.minimumHeight + 'px)');
                    break;
                case exports.DrawerState.Docked:
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
                    case exports.DrawerState.Docked:
                        this._handleDockedPanEnd(ev);
                        break;
                    case exports.DrawerState.Top:
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
                this.state = exports.DrawerState.Docked;
            }
            else {
                this._setTranslateY(this.distanceTop + 'px');
            }
        };
        IonBottomDrawerComponent.prototype._handleDockedPanEnd = function (ev) {
            var absDeltaY = Math.abs(ev.deltaY);
            if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY < 0) {
                this.state = exports.DrawerState.Top;
            }
            else if (absDeltaY > this._BOUNCE_DELTA && ev.deltaY > 0) {
                this.state = exports.DrawerState.Bottom;
            }
            else {
                this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
            }
        };
        IonBottomDrawerComponent.prototype._handleBottomPanEnd = function (ev) {
            if (-ev.deltaY > this._BOUNCE_DELTA) {
                this.state = exports.DrawerState.Docked;
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
            core.Input(),
            __metadata("design:type", Object)
        ], IonBottomDrawerComponent.prototype, "dockedHeight", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], IonBottomDrawerComponent.prototype, "shouldBounce", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], IonBottomDrawerComponent.prototype, "disableDrag", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], IonBottomDrawerComponent.prototype, "distanceTop", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], IonBottomDrawerComponent.prototype, "transition", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Number)
        ], IonBottomDrawerComponent.prototype, "state", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", Object)
        ], IonBottomDrawerComponent.prototype, "minimumHeight", void 0);
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], IonBottomDrawerComponent.prototype, "stateChange", void 0);
        IonBottomDrawerComponent = __decorate([
            core.Component({
                selector: 'ion-bottom-drawer',
                template: "<ion-content class=\"ion-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</ion-content>\n",
                styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}"]
            }),
            __metadata("design:paramtypes", [core.ElementRef,
                core.Renderer2,
                angular.DomController,
                angular.Platform])
        ], IonBottomDrawerComponent);
        return IonBottomDrawerComponent;
    }());

    var IonBottomDrawerModule = /** @class */ (function () {
        function IonBottomDrawerModule() {
        }
        IonBottomDrawerModule = __decorate([
            core.NgModule({
                declarations: [IonBottomDrawerComponent],
                imports: [angular.IonicModule],
                exports: [IonBottomDrawerComponent]
            })
        ], IonBottomDrawerModule);
        return IonBottomDrawerModule;
    }());

    exports.IonBottomDrawerModule = IonBottomDrawerModule;
    exports.ɵa = IonBottomDrawerComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ion-bottom-drawer.umd.js.map
