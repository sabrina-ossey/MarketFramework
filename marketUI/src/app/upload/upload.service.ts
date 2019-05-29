import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest,  HttpEventType,  HttpResponse } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

const url = 'http://localhost:8000/upload';


@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http: HttpClient) { }

  public upload(file: String){
    var body = {filename:file};

    const req = new HttpRequest('POST', url, body, {
      reportProgress: true
    });
    console.log('req', req);
   return req;
  }

  /*public upload(files: Set<File>): {[key:string]:Observable<number>}{
  const status = {};

  files.forEach(file => {

    const formData: FormData = new FormData();
    formData.append('file', file, file.name);


    const req = new HttpRequest('POST', url, formData, {
      reportProgress: true
    });


    const progress = new Subject <number>();


    this.http.request(req).subscribe(event => {
      if(event.type === HttpEventType.UploadProgress){

        const percentDone = Math.round(100 * event.loaded / event.total);

        progress.next(percentDone);
      }
    });

    status[file.name] = {
      progress: progress.asObservable()
    };
  });
  return status;
} */
}
