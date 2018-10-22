import { Component, OnInit } from '@angular/core';
import { Child } from "../../classes/child";
import { PersonService } from "../../services/person.service";
import { Router } from "@angular/router";

@Component({
    selector: 'app-child-insert-view', 
    template: `
        <app-child-mask [child]="child" (saveChild)="saveChild($event)"></app-child-mask>
    `
})
export class ChildInsertViewComponent implements OnInit {

    child = new Child();

    constructor (private personService: PersonService, private router: Router) {
    }

    ngOnInit () {
    }

    saveChild(child: Child) {
        this.personService.saveChild(child).subscribe((response) => {
            console.log('response',response);
            if(response !== 'KO') {
                this.router.navigate(['/child']);
            }
        });
    }

}
