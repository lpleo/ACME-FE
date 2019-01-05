import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { of } from "rxjs/internal/observable/of";
import { Observable } from 'rxjs';
import { Child } from '../classes/child';
import { MessageService } from './message.service';
import { Parent } from '../classes/parent';
import { Subscription } from '../classes/subscription';

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
        .pipe(tap(log => this.log('fetched children')), catchError(this.handleError('getChildren', [])));
  }

  getChildByFiscalCode(fiscalCode: string): Observable<Child> {
    let url = environment.url + "person/child";
    return this.http.get<Child>(url,{params: {'fiscalCode': fiscalCode}}).
      pipe(tap(log => this.log('fetched child with fiscal code [' + fiscalCode + ']')), 
        catchError(this.handleError('getChild', null)));
  }

  getParentByFiscalCode(fiscalCode: string): Observable<Parent> {
      let url = environment.url + "person/parent";
      return this.http.get<Child>(url,{params: {'fiscalCode': fiscalCode}}).
      pipe(tap(log => this.log('fetched parent with fiscal code [' + fiscalCode + ']')),
          catchError(this.handleError('getParent', null)));
  }

  getSubscriptions(childId: number, campId: number): Observable<Subscription[]> {
    let url = environment.url + `person/child/${childId}/subscription`;
    return this.http.get<Subscription[]>(url,{params: {'campId': String(campId)}}).
      pipe(tap(log => this.log(`fetched subscriptions with childId [${childId}] and campId [${campId}]`)), 
        catchError(this.handleError('getSubscriptions',null)));
  }

  saveChild(child: Child): Observable<Child> {
    let url = environment.url + "person/child";
    return this.http.post<Child>(url, child, this.httpOptions)
        .pipe(tap(camps => this.log('save child')), catchError(this.handleError('postChild', null)));
  }

  saveParent(parent: Parent): Observable<Parent> {
    let url = environment.url + "person/parent";
    return this.http.post<String>(url, parent, this.httpOptions)
        .pipe(tap(camps => this.log('save parent')), catchError(this.handleError('postParent', null)));
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
