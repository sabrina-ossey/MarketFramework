import { Component, ViewChild, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Validators} from '@angular/forms';
import { FieldConfig} from './field.interface';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FieldService} from './field.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:  "<router-outlet></router-outlet>",
  styleUrls: ['./app.component.css'],
  //providers: [ FieldService ]
})
export class AppComponent {
  @ViewChild(DynamicFormComponent) form: DynamicFormComponent;
  fields : FieldConfig[];

  constructor() {
  }
  ngOnInit() {
}

  submit(value:any){}
}
