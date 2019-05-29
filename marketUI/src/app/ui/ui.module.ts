import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ServiceProviderComponent } from '../service-provider/service-provider.component';
import { CatalogComponent } from '../agreements/catalog/catalog.component';
import { UploadComponent } from '../upload/upload.component';
import {AssetDetailsComponent} from '../agreements/asset-details/asset-details.component';
import { SideMenuComponent} from '../side-menu/side-menu.component';
import { UploadService } from '../upload/upload.service';
import { DynamicFormComponent } from '../components/dynamic-form/dynamic-form.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NavbarComponent } from '../components/navbar/navbar.component';

export const appRoutes: Routes = [

  { path: 'dataAssetManagement',
    component: ServiceProviderComponent,
    children: [
    {
      path:'catalog', // a revoir
      component:CatalogComponent
    },
    {
      path: ':id',
      component: AssetDetailsComponent
      },
    {
      path:'agreement',
      component:DynamicFormComponent
    },
    {
      path: 'test1',
      outlet: 'sidemenu',
      component: SideMenuComponent
    },
    {
      path: 'test2',
      outlet: 'sidemenu',
      component: SideMenuComponent
    }
  ]
  },
  //{ path: 'serviceProviderDataUpload/:id', component: DialogComponent},
  { path: 'serviceProviderDataUpload/:id', component: UploadComponent},
  { path: 'agreement', component: DynamicFormComponent},
  { path: 'dashboard', component: PageNotFoundComponent  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
     HttpClientModule
  ],
  declarations: [ ],
  exports: [ RouterModule ],
  providers: [ UploadService ]
})
export class UiModule { }
