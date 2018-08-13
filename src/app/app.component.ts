import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div style="text-align:center">
          <app-navigation-bar>
          </app-navigation-bar>
      </div>

      <router-outlet></router-outlet>
  `
})
export class AppComponent {
}
