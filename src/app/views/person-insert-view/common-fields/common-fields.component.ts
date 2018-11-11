import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../classes/person';

@Component({
  selector: 'app-common-fields',
  template: `
  <mat-card>
    <mat-card-subtitle>
        Name & Surname
    </mat-card-subtitle>
    <mat-form-field>
      <input 
        matInput 
        placeholder="Name" 
        [attr.disabled]="edit ? null : 'disabled'"
        [(ngModel)]="person.name">
    </mat-form-field>
    <mat-form-field>
      <input 
        matInput 
        placeholder="Surname"
        [attr.disabled]="edit ? null : 'disabled'"
        [(ngModel)]="person.surname">
    </mat-form-field>
  </mat-card>
  `,
})
export class CommonFieldsComponent implements OnInit {

  @Input() person: Person;
  @Input() edit: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
