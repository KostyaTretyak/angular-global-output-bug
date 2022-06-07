import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <ul>
    <li><a routerLink="./first">first</a></li>
    <li><a routerLink="./second">second</a></li>
  </ul>
  <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
