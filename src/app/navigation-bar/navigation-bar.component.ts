import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  template: `
      <mat-toolbar>
          <button mat-button routerLink="/statistics"><b>ACME</b></button>
          <button mat-button routerLink="/camp">Camp Overview</button>
      </mat-toolbar>
      <br />
  `
})
export class NavigationBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
