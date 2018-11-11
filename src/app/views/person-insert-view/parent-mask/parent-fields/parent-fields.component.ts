import { Component, OnInit, Input } from '@angular/core';
import { Parent } from 'src/app/classes/parent';

@Component({
  selector: 'app-parent-fields',
  template: `
    <mat-card>
      <mat-card-subtitle>
          Other informations
      </mat-card-subtitle>
      <mat-form-field>
          <input matInput placeholder="email" [(ngModel)]="parent.email">
      </mat-form-field>
      <mat-form-field>
          <input matInput placeholder="telephone" [(ngModel)]="parent.telephoneNumber">
      </mat-form-field>
    </mat-card>
  `,
  styles: [``]
})
export class ParentFieldsComponent implements OnInit {

  @Input() parent: Parent;

  constructor() { }

  ngOnInit() {
  }

}
