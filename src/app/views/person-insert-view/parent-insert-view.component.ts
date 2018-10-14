import { Component, OnInit } from '@angular/core';
import { Parent } from '../../classes/parent';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-insert-view',
  template: `
  <mat-card>
    <mat-card-title>Insert new parent</mat-card-title>
    <mat-card-content>
            <app-common-fields [person]="parent"></app-common-fields>
        <br/><br/>
            <app-parent-fields [parent]="parent"></app-parent-fields>
    </mat-card-content>
    <button mat-button color="primary" (click)="this.saveParent()">Save</button>
  </mat-card>
  `,
  styles: [`
    
  `]
})
export class ParentInsertViewComponent implements OnInit {

  parent = new Parent();

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
  }

  saveParent() {
    this.personService.saveParent(this.parent).subscribe((response) => {
        if(response !== 'KO') {
            this.router.navigate(['/parent']);
        }
    });
}

}
