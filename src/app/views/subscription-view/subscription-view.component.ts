import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/classes/child';
import { Parent } from 'src/app/classes/parent';
import { PersonService } from 'src/app/services/person.service';

@Component({
  selector: 'app-subscription-view',
  template: `
      <mat-horizontal-stepper [linear]="true" #stepper>
      <mat-step [stepControl]="firstFormGroup">
        <app-search-child (searchChild)="populateChild($event)" [fiscalCode]="child.fiscalCode"></app-search-child>
        <app-child-mask [child]="child" [edit]="editable()" (saveChild)="saveChild($event)"></app-child-mask>
        <div>
          <button mat-button matStepperNext [disabled]="editable()">Next</button>
        </div>
       </mat-step>
      <mat-step [stepControl]="secondFormGroup">
        <div *ngFor="let parent of parents">
          <app-parent-mask [parent]="parent" (saveParent)="addParent($event)"></app-parent-mask>
        </div>
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button matStepperNext>Next</button>
        </div>
      </mat-step>
      <mat-step>
        <!--TODO-->
        <div>
          <button mat-button matStepperPrevious>Back</button>
          <button mat-button (click)="stepper.reset()">Reset</button>
        </div>
      </mat-step>
    </mat-horizontal-stepper>
  `
})
export class SubscriptionViewComponent implements OnInit {

  child: Child = new Child();
  parents: Array<Parent> = new Array<Parent>();

  constructor(private personService: PersonService) { }

  ngOnInit() {
  }

  populateChild(child: Child) {
    this.child = child;
  }

  editable() {
    return (this.child.id === null || this.child.id === undefined);
  }

  saveChild(child: Child) {
    this.personService.saveChild(child).subscribe((response) => {
        if(response) {
            this.child = response;
        }
    });
}

}
