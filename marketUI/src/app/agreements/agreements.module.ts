import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { CommonModule } from '@angular/common';

//import { ServiceProviderComponent } from '../agreements/service-provider/service-provider.component';
import { CatalogComponent } from '../agreements/catalog/catalog.component';
import { AssetDetailsComponent } from '../agreements/asset-details/asset-details.component';

import { AgreementsRoutingModule } from './agreements-routing.module';
//import { AgreementComponent } from './agreement/agreement.component';
//import { DataAssetInfoComponent } from '../agreements/data-asset-info/data-asset-info.component';
import { MaterialModule } from './../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule ,
    ReactiveFormsModule,
    AgreementsRoutingModule
  ],
  declarations: [
    //ServiceProviderComponent ,
    CatalogComponent
    //AgreementComponent

  ]
})
export class AgreementsModule { }
