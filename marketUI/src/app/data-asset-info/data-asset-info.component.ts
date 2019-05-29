import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SProvider } from '../agreements/s-provider.model';
import { ProviderService } from '../provider.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-data-asset-info',
  templateUrl: './data-asset-info.component.html',
  styleUrls: ['./data-asset-info.component.css']
})
export class DataAssetInfoComponent implements OnInit {
  dataAsset: SProvider[];


  constructor(
    private service: ProviderService ,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    /*this.dataAsset = this.service.getDataAsset(); */
  }

}
