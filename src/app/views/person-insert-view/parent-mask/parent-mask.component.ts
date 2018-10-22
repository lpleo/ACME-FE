import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Parent } from 'src/app/classes/parent';

@Component({
  selector: 'app-parent-mask',
  template: `
    <mat-card>
      <mat-card-title>Insert new parent</mat-card-title>
      <mat-card-content>
              <app-common-fields [person]="parent"></app-common-fields>
          <br/><br/>
              <app-parent-fields [parent]="parent"></app-parent-fields>
      </mat-card-content>
      <button mat-button color="primary" (click)="saveParent.emit(parent)">Save</button>
    </mat-card>
  `
})
export class ParentMaskComponent implements OnInit {

  @Input() parent: Parent;
  @Output() saveParent: EventEmitter<Parent> = new EventEmitter<Parent>();

  constructor() { }

  ngOnInit() {
  }

}
