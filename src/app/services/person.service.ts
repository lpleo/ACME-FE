import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { of } from "rxjs/internal/observable/of";
import { Observable } from 'rxjs';
import { Child } from '../classes/child';
import { MessageService } from './message.service';
import { Parent } from '../classes/parent';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http: HttpClient, private messageService: MessageService) { }

  httpOptions = {
     headers: new HttpHeaders({
         'Content-Type':  'application/json',
         'Authorization': 'my-auth-token'
     })
  };

  getChildren (): Observable<Child[]> {
    let url = environment.url + "person/children";
    return this.http.get<Child[]>(url)
        .pipe(tap(camps => this.log('fetched children')), catchError(this.handleError('getChildren', [])));
  }

  saveChild(child: Child): Observable<String> {
    let url = environment.url + "person/child";
    return this.http.post<String>(url, child, this.httpOptions)
        .pipe(tap(camps => this.log('save child')), catchError(this.handleError('postChild', 'KO')));
  }

  saveParent(parent: Parent): any {
    let url = environment.url + "person/parent";
    return this.http.post<String>(url, parent, this.httpOptions)
        .pipe(tap(camps => this.log('save parent')), catchError(this.handleError('postParent', 'KO')));
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
