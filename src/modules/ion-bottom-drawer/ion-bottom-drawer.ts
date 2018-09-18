import { Component, Input, ElementRef, Renderer2, Output, EventEmitter, AfterViewInit, OnChanges, SimpleChanges } from '@angular/core';
import { Platform, DomController } from 'ionic-angular';

import { DrawerState } from './drawer-state';

@Component({
  selector: 'ion-bottom-drawer',
  templateUrl: 'ion-bottom-drawer.html',
  styleUrls: ['ion-bottom-drawer.scss']
})
export class IonBottomDrawerComponent implements AfterViewInit, OnChanges {
  @Input() dockedHeight: number = 50;

  @Input() shouldBounce: boolean = true;

  @Input() bounceThreshold: number = 200;

  @Input() distanceTop: number = 0;

  @Input() transition: string = '0.5s ease-in-out';

  @Input() state: DrawerState = DrawerState.Docked;

  @Output() stateChange: EventEmitter<DrawerState> = new EventEmitter<DrawerState>();

  private _startPositionTop: number;
  private readonly _HIDE_HEIGHT_DIFF = 30;

  constructor(
    private _element: ElementRef,
    private _renderer: Renderer2,
    private _domCtrl: DomController,
    private _platform: Platform
  ) { }

  ngAfterViewInit() {
    this._renderer.setStyle(this._element.nativeElement.querySelector('.ion-bottom-drawer-scrollable-content .scroll-content'), 'touch-action', 'none');
    this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');

    const hammer = new Hammer(this._element.nativeElement);
    hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_VERTICAL });
    hammer.on('pan panstart panend', (ev: any) => {
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

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.state) return;

    switch (changes.state.currentValue) {
      case DrawerState.Closed:
        this._setTranslateY('100vh');
        break;
      case DrawerState.Docked:
        this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
        break;
      default:
        this._setTranslateY(this.distanceTop + 'px');
    }
  }

  private _handlePanStart() {
    this._startPositionTop = this._element.nativeElement.getBoundingClientRect().top;
  }

  private _handlePanEnd(ev) {
    const newTop = this._startPositionTop + ev.deltaY;

    if (this.shouldBounce && ev.isFinal) {
      this._renderer.setStyle(this._element.nativeElement, 'transition', this.transition);
      const bottomDiff = this._platform.height() - this.bounceThreshold - newTop;

      if (bottomDiff >= 0) {
        if (this.state === DrawerState.Opened) this._setTranslateY(this.distanceTop + 'px');
        this.state = DrawerState.Opened;
      } else {
        if (this.state === DrawerState.Docked && ev.deltaY > this._HIDE_HEIGHT_DIFF) {
          this.state = DrawerState.Closed;
        } else {
          if (this.state === DrawerState.Docked) this._setTranslateY((this._platform.height() - this.dockedHeight) + 'px');
          this.state = DrawerState.Docked;
        }
      }

      this.stateChange.emit(this.state);
    }
  }

  private _handlePan(ev) {
    const pointerY = ev.center.y;
    this._renderer.setStyle(this._element.nativeElement, 'transition', 'none');
    if (pointerY > 0 && pointerY < this._platform.height()) {
      if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
        const newTop = this._startPositionTop + ev.deltaY;
        if (newTop >= this.distanceTop) this._setTranslateY(newTop + 'px');
        else if (newTop < this.distanceTop) this._setTranslateY(this.distanceTop + 'px');
      }
    }
  }

  private _setTranslateY(value) {
    this._domCtrl.write(() => {
      this._renderer.setStyle(this._element.nativeElement, 'transform', 'translateY(' + value + ')');
    });
  }
}
