import {Component, Input, OnInit, ViewChild} from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Child } from '../../../classes/child';

@Component({
  selector: 'app-child-table',
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="dataSource">
          
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>
          
        <ng-container matColumnDef="surname">
          <th mat-header-cell *matHeaderCellDef> Surname </th>
          <td mat-cell *matCellDef="let element"> {{element.surname}} </td>
        </ng-container>

          <ng-container matColumnDef="fiscal code">
              <th mat-header-cell *matHeaderCellDef> Fiscal Code </th>
              <td mat-cell *matCellDef="let element"> {{element.fiscalCode}} </td>
          </ng-container>

          <ng-container matColumnDef="birth date">
              <th mat-header-cell *matHeaderCellDef> Birth Date </th>
              <td mat-cell *matCellDef="let element"> {{element.birthDate}} </td>
          </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
      </table>

      <mat-paginator [pageSizeOptions]="[5, 10, 20]" showFirstLastButtons></mat-paginator>
    </div>
  `,
  styles: [`
    table {
      width: 100%;
    }
  `]
})
export class ChildTableComponent implements OnInit {

  @Input()
  dataSource = new MatTableDataSource<Child>([]);

  displayedColumns: string[] = ['name', 'surname', 'fiscal code', 'birth date'];


  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
