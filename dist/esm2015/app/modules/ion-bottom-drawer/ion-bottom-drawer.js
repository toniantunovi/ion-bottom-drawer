import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, Renderer2, Output, EventEmitter } from '@angular/core';
import { Platform, DomController } from '@ionic/angular';
import * as Hammer from 'hammerjs';
import { DrawerState } from './drawer-state';
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
        hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_VERTICAL });
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "dockedHeight", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "shouldBounce", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "disableDrag", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "distanceTop", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "transition", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], IonBottomDrawerComponent.prototype, "state", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Object)
], IonBottomDrawerComponent.prototype, "minimumHeight", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], IonBottomDrawerComponent.prototype, "stateChange", void 0);
IonBottomDrawerComponent = tslib_1.__decorate([
    Component({
        selector: 'ion-bottom-drawer',
        template: "<ion-content class=\"ion-bottom-drawer-scrollable-content\" no-bounce>\n  <ng-content></ng-content>\n</ion-content>\n",
        styles: [":host{width:100%;height:100%;position:absolute;left:0;z-index:11!important;background-color:#fff;-webkit-transform:translateY(100vh);transform:translateY(100vh)}"]
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        Renderer2,
        DomController,
        Platform])
], IonBottomDrawerComponent);
export { IonBottomDrawerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW9uLWJvdHRvbS1kcmF3ZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9pb24tYm90dG9tLWRyYXdlci8iLCJzb3VyY2VzIjpbImFwcC9tb2R1bGVzL2lvbi1ib3R0b20tZHJhd2VyL2lvbi1ib3R0b20tZHJhd2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQTJDLE1BQU0sZUFBZSxDQUFDO0FBQ3ZJLE9BQU8sRUFBRSxRQUFRLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekQsT0FBTyxLQUFLLE1BQU0sTUFBTSxVQUFVLENBQUM7QUFFbkMsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBTzdDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXdCO0lBb0JuQyxZQUNVLFFBQW9CLEVBQ3BCLFNBQW9CLEVBQ3BCLFFBQXVCLEVBQ3ZCLFNBQW1CO1FBSG5CLGFBQVEsR0FBUixRQUFRLENBQVk7UUFDcEIsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUNwQixhQUFRLEdBQVIsUUFBUSxDQUFlO1FBQ3ZCLGNBQVMsR0FBVCxTQUFTLENBQVU7UUF2QnBCLGlCQUFZLEdBQUcsRUFBRSxDQUFDO1FBRWxCLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXBCLGdCQUFXLEdBQUcsS0FBSyxDQUFDO1FBRXBCLGdCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLGVBQVUsR0FBRyxtQkFBbUIsQ0FBQztRQUVqQyxVQUFLLEdBQWdCLFdBQVcsQ0FBQyxNQUFNLENBQUM7UUFFeEMsa0JBQWEsR0FBRyxDQUFDLENBQUM7UUFFakIsZ0JBQVcsR0FBOEIsSUFBSSxZQUFZLEVBQWUsQ0FBQztRQUdsRSxrQkFBYSxHQUFHLEVBQUUsQ0FBQztJQU9oQyxDQUFDO0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxTQUFTLENBQUMs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QyxLQUFLO1FBQzFCLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsYUFBYSxHQUFHLEtBQUssR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqRyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBakpVO0lBQVIsS0FBSyxFQUFFOzs4REFBbUI7QUFFbEI7SUFBUixLQUFLLEVBQUU7OzhEQUFxQjtBQUVwQjtJQUFSLEtBQUssRUFBRTs7NkRBQXFCO0FBRXBCO0lBQVIsS0FBSyxFQUFFOzs2REFBaUI7QUFFaEI7SUFBUixLQUFLLEVBQUU7OzREQUFrQztBQUVqQztJQUFSLEtBQUssRUFBRTs7dURBQXlDO0FBRXhDO0lBQVIsS0FBSyxFQUFFOzsrREFBbUI7QUFFakI7SUFBVCxNQUFNLEVBQUU7c0NBQWMsWUFBWTs2REFBZ0Q7QUFmeEUsd0JBQXdCO0lBTHBDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxtQkFBbUI7UUFDN0IsaUlBQXFDOztLQUV0QyxDQUFDOzZDQXNCb0IsVUFBVTtRQUNULFNBQVM7UUFDVixhQUFhO1FBQ1osUUFBUTtHQXhCbEIsd0JBQXdCLENBa0pwQztTQWxKWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBsYXRmb3JtLCBEb21Db250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0ICogYXMgSGFtbWVyIGZyb20gJ2hhbW1lcmpzJztcblxuaW1wb3J0IHsgRHJhd2VyU3RhdGUgfSBmcm9tICcuL2RyYXdlci1zdGF0ZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi1ib3R0b20tZHJhd2VyJyxcbiAgdGVtcGxhdGVVcmw6ICdpb24tYm90dG9tLWRyYXdlci5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vaW9uLWJvdHRvbS1kcmF3ZXIuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIElvbkJvdHRvbURyYXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyB7XG4gIEBJbnB1dCgpIGRvY2tlZEhlaWdodCA9IDUwO1xuXG4gIEBJbnB1dCgpIHNob3VsZEJvdW5jZSA9IHRydWU7XG5cbiAgQElucHV0KCkgZGlzYWJsZURyYWcgPSBmYWxzZTtcblxuICBASW5wdXQoKSBkaXN0YW5jZVRvcCA9IDA7XG5cbiAgQElucHV0KCkgdHJhbnNpdGlvbiA9ICcwLjI1cyBlYXNlLWluLW91dCc7XG5cbiAgQElucHV0KCkgc3RhdGU6IERyYXdlclN0YXRlID0gRHJhd2VyU3RhdGUuQm90dG9tO1xuXG4gIEBJbnB1dCgpIG1pbmltdW1IZWlnaHQgPSAwO1xuXG4gIEBPdXRwdXQoKSBzdGF0ZUNoYW5nZTogRXZlbnRFbWl0dGVyPERyYXdlclN0YXRlPiA9IG5ldyBFdmVudEVtaXR0ZXI8RHJhd2VyU3RhdGU+KCk7XG5cbiAgcHJpdmF0ZSBfc3RhcnRQb3NpdGlvblRvcDogbnVtYmVyO1xuICBwcml2YXRlIHJlYWRvbmx5IF9CT1VOQ0VfREVMVEEgPSAzMDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIF9lbGVtZW50OiBFbGVtZW50UmVmLFxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgcHJpdmF0ZSBfZG9tQ3RybDogRG9tQ29udHJvbGxlcixcbiAgICBwcml2YXRlIF9wbGF0Zm9ybTogUGxhdGZvcm1cbiAgKSB7IH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5fcmVuZGVyZXIuc2V0U3R5bGUodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pb24tYm90dG9tLWRyYXdlci1zY3JvbGxhYmxlLWNvbnRlbnQgOmZpcnN0LWNoaWxkJyksXG4gICAgICAndG91Y2gtYWN0aW9uJywgJ25vbmUnKTtcbiAgICB0aGlzLl9zZXREcmF3ZXJTdGF0ZSh0aGlzLnN0YXRlKTtcblxuICAgIGNvbnN0IGhhbW1lciA9IG5ldyBIYW1tZXIodGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50KTtcbiAgICBoYW1tZXIuZ2V0KCdwYW4nKS5zZXQoeyBlbmFibGU6IHRydWUsIGRpcmVjdGlvbjogSGFtbWVyLkRJUkVDVElPTl9WRVJUSUNBTCB9KTtcbiAgICBoYW1tZXIub24oJ3BhbiBwYW5zdGFydCBwYW5lbmQnLCAoZXY6IGFueSkgPT4ge1xuICAgICAgaWYgKHRoaXMuZGlzYWJsZURyYWcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzd2l0Y2ggKGV2LnR5cGUpIHtcbiAgICAgICAgY2FzZSAncGFuc3RhcnQnOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVBhblN0YXJ0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhbmVuZCc6XG4gICAgICAgICAgdGhpcy5faGFuZGxlUGFuRW5kKGV2KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICB0aGlzLl9oYW5kbGVQYW4oZXYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGlmICghY2hhbmdlcy5zdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NldERyYXdlclN0YXRlKGNoYW5nZXMuc3RhdGUuY3VycmVudFZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3NldERyYXdlclN0YXRlKHN0YXRlOiBEcmF3ZXJTdGF0ZSkge1xuICAgIHRoaXMuX3JlbmRlcmVyLnNldFN0eWxlKHRoaXMuX2VsZW1lbnQubmF0aXZlRWxlbWVudCwgJ3RyYW5zaXRpb24nLCB0aGlzLnRyYW5zaXRpb24pO1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgRHJhd2VyU3RhdGUuQm90dG9tOlxuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKCdjYWxjKDEwMHZoIC0gJyArIHRoaXMubWluaW11bUhlaWdodCArICdweCknKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIERyYXdlclN0YXRlLkRvY2tlZDpcbiAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLmRvY2tlZEhlaWdodCkgKyAncHgnKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aGlzLl9zZXRUcmFuc2xhdGVZKHRoaXMuZGlzdGFuY2VUb3AgKyAncHgnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVQYW5TdGFydCgpIHtcbiAgICB0aGlzLl9zdGFydFBvc2l0aW9uVG9wID0gdGhpcy5fZWxlbWVudC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVBhbkVuZChldikge1xuICAgIGlmICh0aGlzLnNob3VsZEJvdW5jZSAmJiBldi5pc0ZpbmFsKSB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgdGhpcy50cmFuc2l0aW9uKTtcblxuICAgICAgc3dpdGNoICh0aGlzLnN0YXRlKSB7XG4gICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuRG9ja2VkOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZURvY2tlZFBhbkVuZChldik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgRHJhd2VyU3RhdGUuVG9wOlxuICAgICAgICAgIHRoaXMuX2hhbmRsZVRvcFBhbkVuZChldik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgdGhpcy5faGFuZGxlQm90dG9tUGFuRW5kKGV2KTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5zdGF0ZUNoYW5nZS5lbWl0KHRoaXMuc3RhdGUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlVG9wUGFuRW5kKGV2KSB7XG4gICAgaWYgKGV2LmRlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkRvY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRG9ja2VkUGFuRW5kKGV2KSB7XG4gICAgY29uc3QgYWJzRGVsdGFZID0gTWF0aC5hYnMoZXYuZGVsdGFZKTtcbiAgICBpZiAoYWJzRGVsdGFZID4gdGhpcy5fQk9VTkNFX0RFTFRBICYmIGV2LmRlbHRhWSA8IDApIHtcbiAgICAgIHRoaXMuc3RhdGUgPSBEcmF3ZXJTdGF0ZS5Ub3A7XG4gICAgfSBlbHNlIGlmIChhYnNEZWx0YVkgPiB0aGlzLl9CT1VOQ0VfREVMVEEgJiYgZXYuZGVsdGFZID4gMCkge1xuICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkJvdHRvbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLmRvY2tlZEhlaWdodCkgKyAncHgnKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVCb3R0b21QYW5FbmQoZXYpIHtcbiAgICBpZiAoLWV2LmRlbHRhWSA+IHRoaXMuX0JPVU5DRV9ERUxUQSkge1xuICAgICAgdGhpcy5zdGF0ZSA9IERyYXdlclN0YXRlLkRvY2tlZDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgnY2FsYygxMDB2aCAtICcgKyB0aGlzLm1pbmltdW1IZWlnaHQgKyAncHgpJyk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlUGFuKGV2KSB7XG4gICAgY29uc3QgcG9pbnRlclkgPSBldi5jZW50ZXIueTtcbiAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2l0aW9uJywgJ25vbmUnKTtcbiAgICBpZiAocG9pbnRlclkgPiAwICYmIHBvaW50ZXJZIDwgdGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkpIHtcbiAgICAgIGlmIChldi5hZGRpdGlvbmFsRXZlbnQgPT09ICdwYW51cCcgfHwgZXYuYWRkaXRpb25hbEV2ZW50ID09PSAncGFuZG93bicpIHtcbiAgICAgICAgY29uc3QgbmV3VG9wID0gdGhpcy5fc3RhcnRQb3NpdGlvblRvcCArIGV2LmRlbHRhWTtcbiAgICAgICAgaWYgKG5ld1RvcCA+PSB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWShuZXdUb3AgKyAncHgnKTtcbiAgICAgICAgfSBlbHNlIGlmIChuZXdUb3AgPCB0aGlzLmRpc3RhbmNlVG9wKSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSh0aGlzLmRpc3RhbmNlVG9wICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld1RvcCA+IHRoaXMuX3BsYXRmb3JtLmhlaWdodCgpIC0gdGhpcy5taW5pbXVtSGVpZ2h0KSB7XG4gICAgICAgICAgdGhpcy5fc2V0VHJhbnNsYXRlWSgodGhpcy5fcGxhdGZvcm0uaGVpZ2h0KCkgLSB0aGlzLm1pbmltdW1IZWlnaHQpICsgJ3B4Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9zZXRUcmFuc2xhdGVZKHZhbHVlKSB7XG4gICAgdGhpcy5fZG9tQ3RybC53cml0ZSgoKSA9PiB7XG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRTdHlsZSh0aGlzLl9lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsICd0cmFuc2Zvcm0nLCAndHJhbnNsYXRlWSgnICsgdmFsdWUgKyAnKScpO1xuICAgIH0pO1xuICB9XG59XG4iXX0=