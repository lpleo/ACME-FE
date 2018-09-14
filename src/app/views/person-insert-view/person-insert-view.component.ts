import { Component, OnInit } from '@angular/core';
import { Child } from "../../classes/child";
import { PersonService } from "../../services/person.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-person-insert-view', template: `

        <mat-card>
            <mat-card-title>Insert new record</mat-card-title>
            <mat-card-content>
                <mat-card>
                    <mat-card-subtitle>
                        Name & Surname
                    </mat-card-subtitle>
                    <mat-form-field class="example-full-width">
                        <input matInput placeholder="Name" [(ngModel)]="child.name">
                    </mat-form-field>
                    <mat-divider [vertical]="true"></mat-divider>
                        <mat-form-field class="example-full-width">
                            <input matInput placeholder="Surname" [(ngModel)]="child.surname">
                    </mat-form-field>
                </mat-card>
                <br/><br/>
                <mat-card>
                    <mat-card-subtitle>
                        Other informations
                    </mat-card-subtitle>
                    <mat-form-field class="example-full-width">
                        <input matInput placeholder="Fiscal Code" [(ngModel)]="child.fiscalCode">
                    </mat-form-field>
                    <mat-divider [vertical]="true"></mat-divider>
                    <mat-form-field>
                        <input matInput [matDatepicker]="picker" placeholder="Birth date" [(ngModel)]="child.birthDate">
                        <mat-datepicker-toggle matSuffix [for]="picker"></mat-datepicker-toggle>
                        <mat-datepicker #picker></mat-datepicker>
                    </mat-form-field>
                </mat-card>
            </mat-card-content>
            <button mat-button color="primary" (click)="this.saveChild()">Save</button>
        </mat-card>
           
    `
})
export class PersonInsertViewComponent implements OnInit {

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
