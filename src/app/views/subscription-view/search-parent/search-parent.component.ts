import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Parent } from "../../../classes/parent";
import { PersonService } from "../../../services/person.service";

@Component({
    selector: 'app-search-parent', template: `
        <mat-card>
            <mat-card-title>Search parent</mat-card-title>
            <mat-card>
                <form class="search-child-form">
                    <mat-form-field>
                        <input
                                matInput
                                [(ngModel)]="fiscalCode"
                                placeholder="'Parent fiscal code"
                                name="parentFiscalCodeSearchField">
                    </mat-form-field>
                    <button mat-button color="primary" (click)="search()">Search child</button>
                    <button mat-button color="primary" (click)="reset()">Reset</button>
                </form>
            </mat-card>
        </mat-card>
    `
})
export class SearchParentComponent implements OnInit {

    @Input() fiscalCode: string = "";
    @Input() active: boolean = true;
    @Output() searchParent: EventEmitter<Parent> = new EventEmitter<Parent>();

    constructor (private personService: PersonService) {
    }

    ngOnInit () {
    }

    search() {
      this.personService.getParentByFiscalCode(this.fiscalCode).subscribe((parent) => {
          if(parent != null) {
              this.searchParent.emit(parent);
          }
      });
    }

    reset() {
        this.fiscalCode = "";
        this.searchParent.emit(new Parent());
    }

}
