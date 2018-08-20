webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomePage = /** @class */ (function () {
    function HomePage() {
        this.drawerHidden = false;
        this.shouldBounce = true;
        this.dockedHeight = 150;
        this.bounceThreshold = 500;
        this.distanceTop = 56;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/toniantunovic/dev/npm-components/ion-bottom-drawer/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Bottom Drawer Demo\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding no-bounce>\n  <ion-list>\n    <ion-item>\n      <ion-label>Drawer hidden</ion-label>\n      <ion-checkbox [(ngModel)]="drawerHidden"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bounce</ion-label>\n      <ion-checkbox [(ngModel)]="shouldBounce"></ion-checkbox>\n    </ion-item>\n    <ion-item>\n      <ion-label>Docked height</ion-label>\n      <ion-input type="number" [(ngModel)]="dockedHeight" value="150"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Bounce threshold</ion-label>\n      <ion-input type="number" [(ngModel)]="bounceThreshold" value="500"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Top Distance</ion-label>\n      <ion-input type="number" [(ngModel)]="distanceTop" value="56"></ion-input>\n    </ion-item>\n  </ion-list>\n</ion-content>\n\n<ion-bottom-drawer [(hidden)]="drawerHidden" [dockedHeight]="dockedHeight" [bounceThreshold]="bounceThreshold" [shouldBounce]="shouldBounce"\n  [distanceTop]="distanceTop">\n  <div class="drawer-content">\n    Bottom Drawer Content\n  </div>\n</ion-bottom-drawer>\n'/*ion-inline-end:"/Users/toniantunovic/dev/npm-components/ion-bottom-drawer/src/pages/home/home.html"*/
        })
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_ion_bottom_drawer_ion_bottom_drawer_module__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__modules_ion_bottom_drawer_ion_bottom_drawer_module__["a" /* IonBottomDrawerModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/toniantunovic/dev/npm-components/ion-bottom-drawer/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/toniantunovic/dev/npm-components/ion-bottom-drawer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonBottomDrawerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ion_bottom_drawer__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IonBottomDrawerModule = /** @class */ (function () {
    function IonBottomDrawerModule() {
    }
    IonBottomDrawerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__ion_bottom_drawer__["a" /* IonBottomDrawerComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__ion_bottom_drawer__["a" /* IonBottomDrawerComponent */]]
        })
    ], IonBottomDrawerModule);
    return IonBottomDrawerModule;
}());

//# sourceMappingURL=ion-bottom-drawer.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IonBottomDrawerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IonBottomDrawerComponent = /** @class */ (function () {
    function IonBottomDrawerComponent(element, renderer, domCtrl, platform) {
        this.element = element;
        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.platform = platform;
        this.dockedHeight = 50;
        this.shouldBounce = true;
        this.bounceThreshold = 200;
        this.distanceTop = 0;
        this.hidden = false;
        this.hiddenChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.HIDE_HEIGHT_DIFF = 30;
    }
    IonBottomDrawerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.setStyle(this.element.nativeElement.querySelector('.ion-bottom-drawer-scrollable-content .scroll-content'), 'touch-action', 'none');
        this.renderer.setStyle(this.element.nativeElement, 'top', this.platform.height() - this.dockedHeight + 'px');
        var hammer = new Hammer(this.element.nativeElement);
        hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_VERTICAL });
        hammer.on('pan panstart panend', function (ev) {
            switch (ev.type) {
                case 'panstart':
                    _this.handlePanStart();
                    break;
                case 'panend':
                    _this.handlePanEnd(ev);
                    break;
                default:
                    _this.handlePan(ev);
            }
        });
    };
    IonBottomDrawerComponent.prototype.handlePanStart = function () {
        this.startPositionTop = this.element.nativeElement.offsetTop;
    };
    IonBottomDrawerComponent.prototype.handlePanEnd = function (ev) {
        var _this = this;
        var bounceToBottom = false;
        var bounceToTop = false;
        var newTop = this.startPositionTop + ev.deltaY;
        if (this.shouldBounce && ev.isFinal) {
            var bottomDiff = (this.platform.height() - this.bounceThreshold) - newTop;
            bottomDiff < 0 ? bounceToBottom = true : bounceToTop = true;
        }
        if (bounceToTop) {
            this.domCtrl.write(function () {
                _this.renderer.setStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                _this.renderer.setStyle(_this.element.nativeElement, 'top', _this.distanceTop + 'px');
            });
        }
        else if (bounceToBottom) {
            this.domCtrl.write(function () {
                _this.renderer.setStyle(_this.element.nativeElement, 'transition', 'top 0.5s');
                if (_this.startPositionTop === _this.platform.height() - _this.dockedHeight && ev.deltaY > _this.HIDE_HEIGHT_DIFF) {
                    _this.renderer.addClass(_this.element.nativeElement, 'hidden');
                    _this.renderer.setStyle(_this.element.nativeElement, 'top', _this.platform.height() - _this.dockedHeight + 'px');
                    _this.hidden = true;
                    _this.hiddenChange.emit(_this.hidden);
                }
                else {
                    _this.renderer.setStyle(_this.element.nativeElement, 'top', _this.platform.height() - _this.dockedHeight + 'px');
                }
            });
        }
    };
    IonBottomDrawerComponent.prototype.handlePan = function (ev) {
        var _this = this;
        var pointerY = ev.center.y;
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'none');
        if (pointerY > 0 && pointerY < this.platform.height()) {
            if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
                this.domCtrl.write(function () {
                    var newTop = _this.startPositionTop + ev.deltaY;
                    if (newTop >= _this.distanceTop)
                        _this.renderer.setStyle(_this.element.nativeElement, 'top', newTop + 'px');
                    else if (newTop < _this.distanceTop)
                        _this.renderer.setStyle(_this.element.nativeElement, 'top', _this.distanceTop + 'px');
                });
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], IonBottomDrawerComponent.prototype, "dockedHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Boolean)
    ], IonBottomDrawerComponent.prototype, "shouldBounce", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], IonBottomDrawerComponent.prototype, "bounceThreshold", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Number)
    ], IonBottomDrawerComponent.prototype, "distanceTop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(), Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* HostBinding */])('class.hidden'),
        __metadata("design:type", Boolean)
    ], IonBottomDrawerComponent.prototype, "hidden", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", Object)
    ], IonBottomDrawerComponent.prototype, "hiddenChange", void 0);
    IonBottomDrawerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'ion-bottom-drawer',template:/*ion-inline-start:"/Users/toniantunovic/dev/npm-components/ion-bottom-drawer/src/modules/ion-bottom-drawer/ion-bottom-drawer.html"*/'<ion-content class="ion-bottom-drawer-scrollable-content" no-bounce>\n  <ng-content></ng-content>\n</ion-content>\n'/*ion-inline-end:"/Users/toniantunovic/dev/npm-components/ion-bottom-drawer/src/modules/ion-bottom-drawer/ion-bottom-drawer.html"*/,
            styleUrls: ['ion-bottom-drawer.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* DomController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */]])
    ], IonBottomDrawerComponent);
    return IonBottomDrawerComponent;
}());

//# sourceMappingURL=ion-bottom-drawer.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map