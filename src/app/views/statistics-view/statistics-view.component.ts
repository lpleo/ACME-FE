import { Component, OnInit } from '@angular/core';
import { CampService } from "../../services/camp.service";
import { Camp } from "../../classes/camp";

@Component({
    selector: 'app-statistics-view', template: `
        <mat-card>
            <app-camp-selector [camps]="camps" [selectedCamp]="activeCamp" 
                (selectedCampEmitter)="setNewSelectedCamp($event)"></app-camp-selector>
            <a mat-button routerLink="/child">Link</a>
            <mat-card>
                {{activeCamp?.name}}
            </mat-card>
        </mat-card>
    `
})
export class StatisticsViewComponent implements OnInit {

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

    setNewSelectedCamp (camp: Camp) {
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
