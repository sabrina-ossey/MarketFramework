import { Component, OnInit } from '@angular/core';
import { SProvider } from "../s-provider.model";
import { SProviderService } from "../s-provider.service";

import {DataAccessMonitoring} from '../../page-not-found/dataAccessMonitoring';
import { DataAccessMonitoringService } from '../../page-not-found/data-access-monitoring.service'
import {DataSource} from '@angular/cdk/table';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  sProvider: SProvider[];

  constructor(private sProviderService: SProviderService,private dataAccessMonitoringService: DataAccessMonitoringService ) { }

  /*ngOnInit(): void {
    this.sProviderService.list()
      .subscribe((data: SProvider[]) => {
          this.sProvider = data;
        }); */


        ngOnInit() {
        }

        /*displayedColumns = ['title', 'category', 'description'];
        dataSource = new PostDataSource(this.dataAccessMonitoringService);
        }

        export class PostDataSource extends DataSource<any> {
        constructor(private dataAccessMonitoringService: DataAccessMonitoringService) {
          super();
        }

      /*  connect(): Observable<DataAccessMonitoring[]> {
          return this.dataAccessMonitoringService.getData();
        } 

        disconnect() {
        } */
        }
