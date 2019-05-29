import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PageNotFoundComponent }   from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { FieldService } from './field.service';
import { DataAccessMonitoringService } from './page-not-found/data-access-monitoring.service'


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule} from './material.module';

import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { SelectComponent } from './components/select/select.component';
import { DateComponent } from './components/date/date.component';
import { RadiobuttonComponent } from './components/radiobutton/radiobutton.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { DynamicFieldDirective } from './components/dynamic-field/dynamic-field.directive';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { UiModule } from './ui/ui.module';
import { UploadModule } from './upload/upload.module';
import { FlexLayoutModule } from '@angular/flex-layout';


import { MwvNavbarComponent } from './components/mwv-navbar/mwv-navbar.component';
import { AgreementsModule } from './agreements/agreements.module';
import { ServiceProviderComponent } from './service-provider/service-provider.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import {AssetDetailsComponent} from './agreements/asset-details/asset-details.component';
//import { DialogComponent } from './upload/dialog/dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    NavbarComponent,
    MwvNavbarComponent,
    PageNotFoundComponent,
    ServiceProviderComponent,
    SideMenuComponent,
    AssetDetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AgreementsModule,
    UiModule,
    UploadModule,
    FlexLayoutModule,
    HttpModule

  ],

  providers: [FieldService, DataAccessMonitoringService ],
  bootstrap: [AppComponent],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    DateComponent,
    RadiobuttonComponent,
    CheckboxComponent
  ]
})

export class AppModule {

 }
