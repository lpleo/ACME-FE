import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { of } from "rxjs/internal/observable/of";
import { Observable } from 'rxjs';
import { Child } from '../classes/child';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  getChildren (): Observable<Child[]> {
    let url = environment.url + "person/children";
    return this.http.get<Child[]>(url)
        .pipe(tap(camps => this.log('fetched children')), catchError(this.handleError('getChildren', [])));
  }

  private log (message: string) {
    this.messageService.add(`CampService: ${message}`);
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

        // TODO: send the error to remote logging infrastructure
        console.error(error); // log to console instead

        // TODO: better job of transforming error for user consumption
        this.log(`${operation} failed: ${error.message}`);

        // Let the app keep running by returning an empty result.
        return of(result as T);
    };
  } 

}
