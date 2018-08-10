import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Camp } from "../../classes/camp";

@Component({
    selector: 'app-camp-selector', template: `
            <mat-form-field>
                <mat-select [(value)]="selectedCamp" (valueChange)="selectedCampEmitter.emit(selectedCamp)">
                    <mat-option *ngFor="let camp of camps" [value]="camp">{{camp.year}}</mat-option>
                </mat-select>
            </mat-form-field>
    `
})

export class CampSelectorComponent implements OnInit {

    @Input() selectedCamp: Camp = new Camp();
    @Input() camps = [];
    @Output() selectedCampEmitter = new EventEmitter<Camp>();

    constructor () {
    }

    ngOnInit () {

    }
}
