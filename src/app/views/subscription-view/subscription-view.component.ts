import { Component, OnInit } from '@angular/core';
import { Child } from 'src/app/classes/child';
import { Parent } from 'src/app/classes/parent';
import { PersonService } from 'src/app/services/person.service';
import { Subscription } from 'src/app/classes/subscription';
import { Camp } from 'src/app/classes/camp';
import { CampService } from 'src/app/services/camp.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-subscription-view',
  template: `
      <mat-horizontal-stepper [linear]="true" #stepper>
          <mat-step [stepControl]="firstFormGroup">
              <app-search-child (searchChild)="populateChild($event)" [fiscalCode]="child.fiscalCode"></app-search-child>
              <app-child-mask [child]="child" [edit]="editableChild()" (saveChild)="saveChild($event)"></app-child-mask>
              <div>
                  <button mat-button matStepperNext [disabled]="editableChild()">Next</button>
              </div>
          </mat-step>
          <mat-step [stepControl]="secondFormGroup">
              <app-search-parent (searchParent)="populateParent($event)" [fiscalCode]="parent.fiscalCode"></app-search-parent>
              <app-parent-mask [parent]="parent" [edit]="editableParent()" (saveParent)="saveParent($event)" ></app-parent-mask>
              <div>
                  <button mat-button matStepperPrevious>Back</button>
                  <button mat-button matStepperNext [disabled]="editableParent()" (click)="searchCamps()">Next</button>
              </div>
          </mat-step>
          <mat-step>
              <app-camp-selector [camps]="camps" [selectedCamp]="activeCamp" 
              (selectedCampEmitter)="searchSubscriptionsFor($event)"></app-camp-selector>
              <app-subscription-table [dataSource]="subscriptions"></app-subscription-table>
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
  parent: Parent = new Parent();
  camps: Camp[] = new Array<Camp>();
  activeCamp: Camp = new Camp();
  subscriptions: MatTableDataSource<Subscription> = new MatTableDataSource<Subscription>([]);

  constructor(private personService: PersonService, private campService: CampService) { }

  ngOnInit() {
  }

  populateChild(child: Child) {
    this.child = child;
  }

  populateParent(parent: Parent) {
    this.parent = parent;
  }

  editableParent() {
    return (this.parent.id === null || this.parent.id === undefined);
  }

  editableChild() {
    return (this.child.id === null || this.child.id === undefined);
  }

  saveChild(child: Child) {
    this.personService.saveChild(child).subscribe((response) => {
        if(response) {
            this.child = response;
        }
    });
  }

  saveParent (parent: Parent) {
      this.personService.saveParent(parent).subscribe((response) => {
          if (response) {
              this.parent = response;
          }
      })
  }

  searchCamps() {
      this.campService.getCamps().subscribe((camps) => {
          if(camps) {
              this.camps = camps;
          }
      })
  }

  searchSubscriptionsFor(camp: Camp) {
      this.activeCamp = camp;
      this.personService.getSubscriptions(this.activeCamp.id,this.child.id).subscribe((subscriptions) => {
          if(subscriptions) {
              this.subscriptions = new MatTableDataSource<Subscription>(subscriptions);
          }
      })
  }
}
