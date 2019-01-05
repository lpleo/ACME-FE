import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { Subscription } from 'src/app/classes/subscription';

@Component({
  selector: 'app-subscription-table',
  template: `
  <div class="mat-elevation-z8">
    <table mat-table [dataSource]="dataSource">
      <ng-container matColumnDef="month">
        <th mat-header-cell *matHeaderCellDef> month </th>
        <td mat-cell *matCellDef="let element"> {{element.month}} </td>
      </ng-container>
      <ng-container matColumnDef="firstDay">
        <th mat-header-cell *matHeaderCellDef> sub start day </th>
        <td mat-cell *matCellDef="let element"> {{element.firstDay}} </td>
      </ng-container>
      <ng-container matColumnDef="lastDay">
        <th mat-header-cell *matHeaderCellDef> sub end date </th>
        <td mat-cell *matCellDef="let element"> {{element.lastDay}} </td>
      </ng-container>
      <ng-container matColumnDef="weekNumber">
        <th mat-header-cell *matHeaderCellDef> week number </th>
        <td mat-cell *matCellDef="let element"> {{element.weekNumber}} </td>
      </ng-container>
      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
    </table>
  </div>
  `, styles: [`
    table {
      width: 100%;
    }
  `]
})
export class SubscriptionTableComponent implements OnInit {

  @Input()
  dataSource = new MatTableDataSource<Subscription>([]);

  displayedColumns: string[] = ['month', 'firstDay', 'lastDay', 'weekNumber'];

  constructor() { }

  ngOnInit() {
  }
}
