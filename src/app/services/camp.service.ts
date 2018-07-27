import { Injectable } from '@angular/core';
import { Observable } from "rxjs/internal/Observable";
import { catchError, tap } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Camp } from "../classes/camp";
import { of } from "rxjs/internal/observable/of";
import { MessageService } from "./message.service";

@Injectable({
    providedIn: 'root'
})
export class CampService {

    constructor (private http: HttpClient, private messageService: MessageService) {
    }

    getCamps (): Observable<Camp[]> {
        let url = environment.url + "camp";
        return this.http.get<Camp[]>(url)
            .pipe(tap(camps => this.log('fetched camps')), catchError(this.handleError('getCamps', [])));
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

    private log (message: string) {
        this.messageService.add(`CampService: ${message}`);
    }
}
