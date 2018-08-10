import { Component, OnInit } from '@angular/core';
import { CampService } from "../services/camp.service";
import { Camp } from "../classes/camp";

@Component({
    selector: 'app-statistics', template: `
        <mat-grid-list cols="2" rowHeight="3:1">
            <mat-grid-tile>
                <app-camp-selector [camps]="camps" [selectedCamp]="activeCamp" (selectedCampEmitter)="setNewSelectedCamp($event)"></app-camp-selector>
            </mat-grid-tile>
            <mat-grid-tile>{{activeCamp?.name}}</mat-grid-tile>
            <mat-grid-tile>test</mat-grid-tile>
            <mat-grid-tile>test</mat-grid-tile>
        </mat-grid-list>
    `
})
export class StatisticsComponent implements OnInit {

    constructor (private campService: CampService) {
    }

    camps: Array<Camp> = [];
    activeCamp = new Camp();

    ngOnInit () {
        this.campService.getCamps().subscribe(result => {
            this.camps = result;
            this.extractActiveCamp();
        });
    }

    setNewSelectedCamp(camp: Camp) {
        this.activeCamp = camp;
        CampService.setCampInLocalStorage(camp);
    }

    private extractActiveCamp () {
        for (let i = 0; i < this.camps.length; i++) {
            if (this.camps[i].active) {
                this.activeCamp = this.camps[i];
            }
        }
    }

}
