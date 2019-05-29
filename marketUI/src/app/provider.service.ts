import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

import { Provider } from './provider';
import { PROVIDERS } from './mock-provider';
import { SProvider } from './agreements/s-provider.model';
import { DATAASSET } from './mock-dataAsset';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  dataAsset: string[] = [];

  constructor() { }

  getProviders(): any{
    return of(PROVIDERS);
  }

/*  getDataAsset(): Observable<SProvider>{
    return of(DATAASSET);
  } */

  getDataAsset() {
      return this.dataAsset;
  }

  setDataAsset(dataContent: string, dataStaticity: string, dataSentitivitylevel: string){
    this.dataAsset.push(
      dataStaticity = dataStaticity,
      dataSentitivitylevel = dataSentitivitylevel,
      dataContent =  dataContent
    );
  }

  getProvider(id: number | string) {
    return this.getProviders().pipe(
      map((providers: Provider[]) => providers.find(provider => provider.id === +id))
    );
  }
}
