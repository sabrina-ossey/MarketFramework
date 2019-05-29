import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})

export class AgreementService {
  template: any;
  agreement: any;

  constructor(private http:Http) { }

  registerTemplate(template) {
    let headers = new Headers();
	  headers.append('Content-Type','application/json');
    console.log(template);
    return this.http.post('http://localhost:3000/templates/register', template, {headers: headers})
       .map(res => res.json());
  }

  registerAgreement(agreement){
    let headers = new Headers();
	  headers.append('Content-Type','application/json');
    console.log(agreement);
    return this.http.post('http://localhost:3000/agreements/register', agreement, {headers: headers})
       .map(res => res.json());
  }

  getTemplate() {
    let headers = new Headers();
	  headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/templates/profile',{headers: headers})
        .map(res => res.json());
  }

  getAgreement() {
    let headers = new Headers();
	  headers.append('Content-Type','application/json');
    return this.http.get('http://localhost:3000/agreements/profile',{headers: headers})
        .map(res => res.json());
  }
}
