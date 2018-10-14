import { Component, OnInit } from '@angular/core';
import { ChildFilter } from '../../classes/child-filter';
import {MatTableDataSource} from "@angular/material";
import {Child} from "../../classes/child";
import {PersonService} from "../../services/person.service";

@Component({
  selector: 'app-person-view',
  template: `      
        <mat-card>
            <a mat-button color="primary" routerLink="/child/add">Add children</a>
            <a mat-button color="primary" routerLink="/parent/add">Add parent</a>
            <a mat-button color="primary" routerLink="/subscription/add">Add subscription</a>
            <app-child-filter></app-child-filter>
        </mat-card>
        <app-child-table [dataSource]="dataSource"></app-child-table>
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
