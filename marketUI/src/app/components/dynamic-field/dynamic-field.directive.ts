import { ComponentFactoryResolver, ComponentRef, Directive, Input, OnInit,
ViewContainerRef } from '@angular/core';

import { FormGroup } from "@angular/forms";
import { FieldConfig } from "../../field.interface";
import { InputComponent } from "../input/input.component";
import { ButtonComponent } from "../button/button.component";
import { SelectComponent } from "../select/select.component";
import { DateComponent } from "../date/date.component";
import { RadiobuttonComponent } from "../radiobutton/radiobutton.component";
import { CheckboxComponent } from "../checkbox/checkbox.component";

const componentMapper = {
  input: InputComponent,
  button: ButtonComponent,
  select: SelectComponent,
  date: DateComponent,
  radiobutton: RadiobuttonComponent,
  checkbox: CheckboxComponent
};


@Directive({
  selector: '[dynamicField]'
})

export class DynamicFieldDirective implements OnInit{

  @Input() field: FieldConfig;

  @Input() group: FormGroup;

  ComponentRef: any;

  constructor(
    private resolver: ComponentFactoryResolver,
    private container: ViewContainerRef
  ) { }

  ngOnInit() {

    const factory = this.resolver.resolveComponentFactory(
      componentMapper[this.field.type]
    );

    this.ComponentRef = this.container.createComponent(factory);
    this.ComponentRef.instance.field = this.field;
    this.ComponentRef.instance.group = this.group;
  }

}
