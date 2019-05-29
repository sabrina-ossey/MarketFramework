import { Component, OnInit } from '@angular/core';
import {DataAccessMonitoring} from './dataAccessMonitoring';
import { DataAccessMonitoringService } from './data-access-monitoring.service'
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})


export class PageNotFoundComponent implements OnInit {

  dataSource: DataSource<any>;
//  displayedColumns = ['transactionData', 'hashedData',  'proof', 'verifiedProof'];
  displayedColumns = ['monitoredData', 'hash',  'uri', 'proof', 'anchorsId', 'verified', 'verifiedAt' ];

/*  displayedHashColumns = ['hashElements'];
  displayedHashColumns2 = ['proofElements'];
  displayedHashColumns3 = ['verifiedElements']; */
  dataAccessMonitoring : DataAccessMonitoring[];



  /*<ng-container matColumnDef="hashElementNodeID">
    <mat-header-cell *matHeaderCellDef> NodeId </mat-header-cell>
    <mat-cell *matCellDef="let hashElement">{{hashElement.hashIdNode}}</mat-cell>
  </ng-container>*/

  constructor(private dataAccessMonitoringService: DataAccessMonitoringService) { }

  ngOnInit() {
    this.dataSource = new MonitorinDataSource(this.dataAccessMonitoringService);

    setTimeout(() => { console.log("Fetched data"); console.log(this.dataSource); },15000);
      }
  }

  /*connect() {
    console.log("test2");
  //  this.dataAccessMonitoringService.getMonitoringData();
     this.dataAccessMonitoringService.getMonitoringData().subscribe(res => {
                 console.log("test3");
                 console.log(res);
                 console.log(res.data.elementHash.0.groupId);
                 this.dataSource= res;
               }
             );
             }
} */


export class MonitorinDataSource extends DataSource<any> {
  constructor(private dataAccessMonitoringService: DataAccessMonitoringService) {
    super();
  }
  connect(): Observable<DataAccessMonitoring[]> {
    console.log("test2")
    var temp = this.dataAccessMonitoringService.getMonitoringData();
    temp.subscribe(res => {console.log("in connect"); console.log(res)});
    return temp;
  }
  disconnect() {}
}
