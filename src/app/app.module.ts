import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { StatisticsViewComponent } from './views/statistics-view/statistics-view.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    MatButtonModule, MatCardModule, MatGridListModule, MatSelectModule, MatToolbarModule
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

const routes: Routes = [
    { path: 'statistics', component: StatisticsViewComponent},
    { path: 'camp', component: CampViewComponent},
    { path: 'child', component: PersonViewComponent},
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
      ChildFilterComponent
  ],
  imports: [
    BrowserModule,
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
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
