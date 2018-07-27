import { Component, OnInit } from '@angular/core';
import { Camp } from "../../classes/camp";
import { CampService } from "../../services/camp.service";

@Component({
    selector: 'app-camp-selector',
    templateUrl: './camp-selector.component.html',
    styleUrls: ['./camp-selector.component.css']
})

export class CampSelectorComponent implements OnInit {

    camps: Array<Camp> = [];
    activeCamp: Camp;

    constructor (private campService: CampService) {
    }

    ngOnInit () {
        this.campService.getCamps().subscribe(result => {
            this.camps = result;
            this.extractActiveCamp();
        });
    }

    private extractActiveCamp () {
        for (let i = 0; i < this.camps.length; i++) {
            if (this.camps[i].active) {
                this.activeCamp = this.camps[i];
            }
        }
    }
}
