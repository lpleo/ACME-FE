import { Component, OnInit } from '@angular/core';
import { Parent } from '../../classes/parent';
import { PersonService } from '../../services/person.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-insert-view',
  template: `
    <app-parent-mask [parent]="parent" (saveParent)="saveParent($event)"></app-parent-mask>
  `,
  styles: [`
    
  `]
})
export class ParentInsertViewComponent implements OnInit {

  parent = new Parent();

  constructor(private personService: PersonService, private router: Router) { }

  ngOnInit() {
  }

  saveParent(parent: Parent) {
    this.personService.saveParent(parent).subscribe((response) => {
        if(response !== 'KO') {
            this.router.navigate(['/parent']);
        }
    });
}

}
