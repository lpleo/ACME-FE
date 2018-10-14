import { Component, OnInit, Input } from '@angular/core';
import { Child } from 'src/app/classes/child';

@Component({
  selector: 'app-child-fields',
  template: `
  <mat-card>
    <mat-card-subtitle>
        Other informations
    </mat-card-subtitle>
    <mat-form-field class="example-full-width">
        <input matInput placeholder="Fiscal Code" [(ngModel)]="child.fiscalCode">
    </mat-form-field>
    <mat-form-field>
        <input matInput [matDatepicker]="picker" placeholder="Birth date" [(ngModel)]="child.birthDate">
        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
        <mat-datepicker #picker></mat-datepicker>
    </mat-form-field>
  </mat-card>
  `
})
export class ChildFieldsComponent implements OnInit {

  @Input() child: Child;

  constructor() { }

  ngOnInit() {
  }

}
