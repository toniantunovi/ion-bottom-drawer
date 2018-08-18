import { Component, Input, ElementRef, Renderer2, HostBinding, Output, EventEmitter } from '@angular/core';
import { Platform, DomController } from 'ionic-angular';

@Component({
  selector: 'ion-bottom-drawer',
  templateUrl: 'ion-bottom-drawer.html'
})
export class IonBottomDrawerComponent {
  @Input() dockedHeight: number = 50;
  @Input() shouldBounce: boolean = true;
  @Input() bounceThreshold: number = 200;
  @Input() distanceTop: number = 0;
  @Input() @HostBinding('class.isHidden') hidden: boolean = false;
  @Output() hiddenChange = new EventEmitter<boolean>();

  private startPositionTop: number;
  private readonly HIDE_HEIGHT_DIFF = 30;

  constructor(private element: ElementRef, private renderer: Renderer2, private domCtrl: DomController, private platform: Platform) { }

  ngAfterViewInit() {
    this.renderer.setStyle(this.element.nativeElement, 'top', this.platform.height() - this.dockedHeight + 'px');
    const hammer = new Hammer(this.element.nativeElement);
    hammer.get('pan').set({ enable: true, direction: Hammer.DIRECTION_VERTICAL });
    hammer.on('pan panstart panend', (ev: any) => {
      switch (ev.type) {
        case 'panstart':
          this.handlePanStart();
          break;
        case 'panend':
          this.handlePanEnd(ev);
          break;
        default:
          this.handlePan(ev);
      }
    });
  }

  private handlePanStart() {
    this.startPositionTop = this.element.nativeElement.offsetTop;
  }

  private handlePanEnd(ev) {
    let bounceToBottom = false;
    let bounceToTop = false;
    const newTop = this.startPositionTop + ev.deltaY;

    if (this.shouldBounce && ev.isFinal) {
      let bottomDiff = (this.platform.height() - this.bounceThreshold) - newTop;
      bottomDiff < 0 ? bounceToBottom = true : bounceToTop = true;
    }

    if (bounceToTop) {
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setStyle(this.element.nativeElement, 'top', this.distanceTop + 'px');
      });
    } else if (bounceToBottom) {
      this.domCtrl.write(() => {
        this.renderer.setStyle(this.element.nativeElement, 'transition', 'top 0.5s');
        this.renderer.setStyle(this.element.nativeElement, 'top', this.platform.height() - this.dockedHeight + 'px');
        if (this.startPositionTop === this.platform.height() - this.dockedHeight && ev.deltaY > this.HIDE_HEIGHT_DIFF) {
          this.renderer.addClass(this.element.nativeElement, 'isHidden');
          this.hidden = true;
          this.hiddenChange.emit(this.hidden);
        }
      });
    }
  }

  private handlePan(ev) {
    const pointerY = ev.center.y;
    this.renderer.setStyle(this.element.nativeElement, 'transition', 'none');
    if (pointerY > 0 && pointerY < this.platform.height()) {
      if (ev.additionalEvent === 'panup' || ev.additionalEvent === 'pandown') {
        this.domCtrl.write(() => {
          const newTop = this.startPositionTop + ev.deltaY;
          if (newTop >= this.distanceTop) this.renderer.setStyle(this.element.nativeElement, 'top', newTop + 'px');
          else if (newTop < this.distanceTop) this.renderer.setStyle(this.element.nativeElement, 'top', this.distanceTop + 'px');
        });
      }
    }
  }
}
