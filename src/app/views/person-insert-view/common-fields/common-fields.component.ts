import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Person } from '../../../classes/person';

@Component({
  selector: 'app-common-fields',
  template: `
  <mat-card>
    <mat-card-subtitle>
        Name & Surname
    </mat-card-subtitle>
    <mat-form-field class="example-full-width">
      <input 
        matInput 
        placeholder="Name" 
        [(ngModel)]="person.name">
    </mat-form-field>
    <mat-form-field class="example-full-width">
      <input 
        matInput 
        placeholder="Surname" 
        [(ngModel)]="person.surname">
    </mat-form-field>
  </mat-card>
  `,
})
export class CommonFieldsComponent implements OnInit {

  @Input() person: Person;

  constructor() { }

  ngOnInit() {
  }

}
