import { Component, OnInit } from '@angular/core';
import { ChildFilter } from '../../classes/child-filter';
import { ChildFilterComponent } from './child-filter/child-filter.component';

@Component({
  selector: 'app-person-view',
  template: `
    <mat-drawer-container class="example-container">
      <mat-drawer mode="side" opened>
        <app-child-filter></app-child-filter>
      </mat-drawer>
      <mat-drawer-content>
        <app-child-table></app-child-table>
      </mat-drawer-content>
    </mat-drawer-container>
  `
})
export class PersonViewComponent implements OnInit {

  filter: ChildFilter = new ChildFilter();

  constructor() { }

  ngOnInit() {
    
  }

}
