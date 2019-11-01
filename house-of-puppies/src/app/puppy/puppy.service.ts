import { Injectable } from '@angular/core';
import { IPuppy } from './puppy';

import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PuppyService {

    private puppyUrl = '../api/puppy/puppy.json';

    constructor(private http: HttpClient) { }

    getPuppies(): Observable<IPuppy[]> {
        return this.http.get<IPuppy[]>(this.puppyUrl).pipe(
            tap(data => console.log('All Puppies: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    getPuppyById(id: number): Observable<IPuppy | undefined> {
        return this.getPuppies()
          .pipe(
            map((puppies: IPuppy[]) => puppies.find(p => p.puppyId === id))
          );
      }


    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrasturcture
        // instead of logging it to the console.
        let errMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A cient side or network error occured. Handle it accordingly.
            errMessage = `An error occured: ${err.error.message}`;
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.log(errMessage);
        return throwError(errMessage);
    }
}
