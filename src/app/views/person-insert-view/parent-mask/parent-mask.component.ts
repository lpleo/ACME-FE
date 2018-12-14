import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Parent } from 'src/app/classes/parent';

@Component({
  selector: 'app-parent-mask',
  template: `
    <mat-card>
      <mat-card-title>Insert new parent</mat-card-title>
      <mat-card-content>
              <app-common-fields [edit]="edit" [person]="parent"></app-common-fields>
          <br/><br/>
              <app-parent-fields [edit]="edit" [parent]="parent"></app-parent-fields>
      </mat-card-content>
      <button mat-button color="primary" (click)="saveParent.emit(parent)" [disabled]="!edit">Save</button>
    </mat-card>
  `
})
export class ParentMaskComponent implements OnInit {

  @Input() parent: Parent;
  @Input() edit: boolean = false;
  @Output() saveParent: EventEmitter<Parent> = new EventEmitter<Parent>();

  constructor() { }

  ngOnInit() {
  }

}
