import { Injectable } from '@angular/core';
import { DataAccessMonitoring } from './dataAccessMonitoring';
import { Observable, of } from 'rxjs';
import { HttpClient } from  "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DataAccessMonitoringService {

  apiURL: string = 'http://localhost:3002';

  /*ELEMENT_DATA: DataAccessMonitoring[] = [
   {transationData: '', proof: 'Post One', verifiedProof: 'Web Development'},
   {transationData: '', proof: 'Post One', verifiedProof: 'Web Development'},
   {transationData: '', proof: 'Post One', verifiedProof: 'Web Development'},
 ]; */

  constructor(private httpClient: HttpClient) { }

  /*getData(): Observable<DataAccessMonitoring[]> {
    return of<DataAccessMonitoring[]>(this.ELEMENT_DATA);
  } */

  public getMonitoringDataById(id: number) {}

  public getMonitoringData(): Observable<DataAccessMonitoring[]> {
    //return this.httpClient.get<DataAccessMonitoring[]>(`${this.apiURL}/hash`);
    console.log("service called");
    return this.httpClient.get<DataAccessMonitoring[]>(this.apiURL + '/getMonitoringData');

  }


  /*dataLength() {
    return this.ELEMENT_DATA.length;
  } */
}
