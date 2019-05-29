import { Injectable } from '@angular/core';
import { Http, Headers, Response} from "@angular/http";
import { HttpClient, HttpErrorResponse  } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import "rxjs/add/operator/map";
import { SProvider } from "./s-provider.model";
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SProviderService {
    private choices: Array<any>=[];
    //sProvider: Observable<SProvider[]>;

  constructor(private http: HttpClient ) { }
  url = 'http://localhost:4000';

list(): Observable<SProvider[]> {
  return this
          .http
          .get<SProvider[]>(`${this.url}/results`)
          .pipe(catchError(this.handleError));
    }

get(id: number): Observable<SProvider[]> {
  //let headers = new Headers();
	   // headers.append('Content-Type','application/json');
        return this
                .http
                .get<SProvider[]>("http://localhost:4000/results/" + id + "/")
                .pipe(catchError(this.handleError));
                //.map(res => res.json);
}



    // define a getInventions() method to get the default Inventions
public getChoice() {
let localStorageChoice = JSON.parse(localStorage.getItem('choices'));
return localStorageChoice == null ? []:  localStorageChoice.choices;

}

// private function to help save to local storage
public setLocalStorageChoices(choices): void {
  localStorage.setItem('choices', JSON.stringify({ choices: choices }));
}


private handleError(error: HttpErrorResponse) {
  if(error.error instanceof ErrorEvent) {
    console.error('An error occured:', error.error.message);
  } else {
    console.error(`Backend returned code
  ${error.status},` +
        `body was:
  ${error.error}`);
  }
  return throwError('Something bad happened;  please try again later.');

}

}
