import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from "@angular/router";
import { StatisticsComponent } from './statistics/statistics.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
    MatButtonModule, MatCardModule, MatGridListModule, MatSelectModule, MatToolbarModule
} from "@angular/material";
import { CampSelectorComponent } from "./statistics/camp-selector/camp-selector.component";
import { HttpClientModule } from "@angular/common/http";

const routes: Routes = [
    { path: 'statistics', component: StatisticsComponent},
    { path: '', component: StatisticsComponent}
];

@NgModule({
  declarations: [
      AppComponent,
      NavigationBarComponent,
      StatisticsComponent,
      CampSelectorComponent
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
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
