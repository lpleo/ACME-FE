import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Child } from 'src/app/classes/child';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-search-child',
  template: `
  <mat-card>
    <mat-card-title>Search child</mat-card-title>
    <mat-card>
      <form class="search-child-form">
        <mat-form-field>
          <input 
            matInput 
            [(ngModel)]="fiscalCode" 
            placeholder="Child fiscal code" 
            name="childFiscalCodeSearchField">
        </mat-form-field> 
        <button mat-button color="primary" (click)="search()">Search child</button>
        <button mat-button color="primary" (click)="reset()">Reset</button>
      </form>
    </mat-card>
  </mat-card>
  `
})
export class SearchChildComponent implements OnInit {

  @Input() fiscalCode: string = "";
  @Input() active: boolean = true;
  @Output() searchChild: EventEmitter<Child> = new EventEmitter<Child>();


  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  search() {
    this.personService.getChildByFiscalCode(this.fiscalCode).subscribe((child) => {
      if(child != null) {
        this.searchChild.emit(child);
      }
    });
  }

  reset() {
    this.fiscalCode = "";
    this.searchChild.emit(new Child());
  }

}
