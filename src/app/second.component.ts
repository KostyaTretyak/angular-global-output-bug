import { Component } from '@angular/core';

@Component({
  template: `
  <p>second works!</p>
  <app-child (someEvent)="someEventFromChild($event)"></app-child>
  {{ messageFromChild }}
  `
})
export class SecondComponent {
  messageFromChild = '';

  someEventFromChild(message: string) {
    console.log('we have some event from child');
    this.messageFromChild = message;
  }

}
