import { Component, OnInit } from '@angular/core';
import { ChildFilter } from '../../classes/child-filter';
import {MatTableDataSource} from "@angular/material";
import {Child} from "../../classes/child";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-person-view',
  template: `
    <mat-drawer-container class="example-container">
      <mat-drawer mode="side" opened>
        <app-child-filter></app-child-filter>
      </mat-drawer>
      <mat-drawer-content>
        <app-child-table [dataSource]="dataSource"></app-child-table>
      </mat-drawer-content>
    </mat-drawer-container>
  `
})
export class PersonViewComponent implements OnInit {

  filter: ChildFilter = new ChildFilter();
  dataSource = new MatTableDataSource<Child>([]);

  constructor(private personService: PersonService) { }

  ngOnInit() {
      this.personService.getChildren().subscribe((childrenList) => {
          this.dataSource = new MatTableDataSource<Child>(childrenList);
      })
  }

}
