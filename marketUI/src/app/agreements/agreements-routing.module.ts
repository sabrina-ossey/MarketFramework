import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ServiceProviderComponent } from '../agreements/service-provider/service-provider.component';
import { CatalogComponent } from '../agreements/catalog/catalog.component';
import { AssetDetailsComponent } from '../agreements/asset-details/asset-details.component';
//import { DataAssetInfoComponent } from '../agreements/data-asset-info/data-asset-info.component';

import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
/*
const agreementRoutes: Routes = [
  //{ path: 'heroes', redirectTo: '/superheroes' },
  //{ path: 'hero/:id', redirectTo: '/superhero/:id' },
  { path: 'serviceproviders',  component: ServiceProviderComponent },
  { path: 'catalogs', component: CatalogComponent},
  { path: 'assets', component: AssetDetailsComponent}
]; */

const agreementRoutes: Routes = [
  /*{
    path: 'dataAssetManagement',
    component: ServiceProviderComponent,
    children: [
      {
        path: '',
        component: DynamicFormComponent
      }
    ]
  } */
];

@NgModule({
  imports: [RouterModule.forChild(agreementRoutes)],
  exports: [RouterModule]
})
export class AgreementsRoutingModule { }
