import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator } from '@angular/material';
import { Child } from '../../../classes/child';
import { PersonService } from '../../../services/person.service';

@Component({
  selector: 'app-child-table',
  template: `
    <div class="mat-elevation-z8">
      <table mat-table [dataSource]="dataSource">

        <!-- Name Column -->
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef> Name </th>
          <td mat-cell *matCellDef="let element"> {{element.name}} </td>
        </ng-container>

        <!-- Surname Column -->
        <ng-container matColumnDef="surname">
          <th mat-header-cell *matHeaderCellDef> Surname </th>
          <td mat-cell *matCellDef="let element"> {{element.surname}} </td>
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

  children = new Array<Child>();
  dataSource = new MatTableDataSource<Child>([]);
  displayedColumns: string[] = ['name', 'surname'];
  

  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private personService: PersonService) { }

  ngOnInit() {

    this.dataSource.paginator = this.paginator;

    this.personService.getChildren().subscribe((childrenList) => {
      this.children = childrenList;
      console.log('children result', this.children);
      this.dataSource = new MatTableDataSource<Child>(this.children);
    })
  }

}
