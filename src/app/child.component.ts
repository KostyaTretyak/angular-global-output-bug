import { Component, EventEmitter, NgZone, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
  <p>child works!</p>
  `
})
export class ChildComponent implements OnInit {
  @Output() someEvent = new EventEmitter<string>();

  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    if ((window as any).testCallback) {
      (window as any).testCallback();
      return;
    }

    (window as any).testCallback = () => {
      this.zone.run(() => {
        this.someEvent.emit('mesage from child @Output');
      });
    };

    (window as any).testCallback();
  }

}
