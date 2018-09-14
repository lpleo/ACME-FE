import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { StatisticsViewComponent } from './views/statistics-view/statistics-view.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    MatButtonModule,
    MatCardModule, MatDividerModule,
    MatGridListModule,
    MatNativeDateModule,
    MatSelectModule,
    MatToolbarModule
} from "@angular/material";
import { CampSelectorComponent } from "./views/statistics-view/camp-selector/camp-selector.component";
import { HttpClientModule } from "@angular/common/http";
import { CampViewComponent } from './views/camp-view/camp.component';
import { PersonViewComponent } from './views/person-view/person-view.component';
import { ChildTableComponent } from './views/person-view/child-table/child-table.component';
import { ChildFilterComponent } from './views/person-view/child-filter/child-filter.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PersonInsertViewComponent } from './views/person-insert-view/person-insert-view.component';
import { FormsModule } from "@angular/forms";

const routes: Routes = [
    { path: 'statistics', component: StatisticsViewComponent},
    { path: 'camp', component: CampViewComponent},
    { path: 'child', component: PersonViewComponent},
    { path: 'child/add', component: PersonInsertViewComponent},
    { path: '', component: StatisticsViewComponent}
];

@NgModule({
  declarations: [
      AppComponent,
      NavigationBarComponent,
      StatisticsViewComponent,
      CampSelectorComponent,
      CampViewComponent,
      PersonViewComponent,
      ChildTableComponent,
      ChildFilterComponent,
      PersonInsertViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatGridListModule,
    MatSelectModule,
    MatCardModule,
    MatSidenavModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatDatepickerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,
    RouterModule.forRoot(routes)

  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
