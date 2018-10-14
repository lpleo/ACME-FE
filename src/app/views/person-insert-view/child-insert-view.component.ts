import { Component, OnInit } from '@angular/core';
import { Child } from "../../classes/child";
import { PersonService } from "../../services/person.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-child-insert-view', template: `
        <mat-card>
            <mat-card-title>Insert new child</mat-card-title>
            <mat-card-content>
                    <app-common-fields [person]="child"></app-common-fields>
                <br/><br/>
                    <app-child-fields [child]="child"></app-child-fields>
            </mat-card-content>
            <button mat-button color="primary" (click)="this.saveChild()">Save</button>
        </mat-card>
    `
})
export class ChildInsertViewComponent implements OnInit {

    child = new Child();

    constructor (private personService: PersonService, private router: Router) {
    }

    ngOnInit () {
    }

    saveChild() {
        this.personService.saveChild(this.child).subscribe((response) => {
            console.log('response',response);
            if(response !== 'KO') {
                this.router.navigate(['/child']);
            }
        });
    }

}
