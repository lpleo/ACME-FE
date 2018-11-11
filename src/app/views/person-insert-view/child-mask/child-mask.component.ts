import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Child } from 'src/app/classes/child';

@Component({
  selector: 'app-child-mask',
  template: `
    <mat-card>
      <mat-card-title>Insert new child</mat-card-title>
      <mat-card-content>
              <app-common-fields [edit]="edit" [person]="child"></app-common-fields>
          <br/><br/>
              <app-child-fields [edit]="edit" [child]="child"></app-child-fields>
      </mat-card-content>
      <button mat-button color="primary" (click)="saveChild.emit(child)" [disabled]="!edit">Save</button>
    </mat-card>
  `
})
export class ChildMaskComponent implements OnInit {

  @Input() child: Child;
  @Input() edit: boolean = false;
  @Output() saveChild: EventEmitter<Child> = new EventEmitter<Child>();

  constructor() { }

  ngOnInit() {
  }

}
