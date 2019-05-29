import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from "@angular/core";
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { FieldConfig, Validator } from "../../field.interface";
import { FieldService} from '../../field.service';
import { ProviderService } from '../../provider.service';
import { AgreementService } from '../../agreements/agreement.service';

@Component({
  exportAs: 'dynamicForm',
  selector: 'dynamic-form',
  template: `
<div class='form'>
  <div style="text-align:center">
    <h2>
      Agreement Form
    </h2>

    <form class="dynamic-form" [formGroup]="form" (submit)="onSubmit($event)">
    <ng-container *ngFor="let field of fields;" dynamicField [field]="field" [group]="form">
    </ng-container>
    </form>
</div>

  </div>
  <div class="margin-top">
  <pre> {{form.value | json}}</pre>
  </div>

  `,
  styleUrls: []
})


export class DynamicFormComponent implements OnInit {
  @Input() fields: FieldConfig[] = [];
  @Output() submit: EventEmitter<any> = new EventEmitter<any>();
  form: FormGroup;


  ////////// Bring data category /////////////////////

  dataContent: String;
  dataStaticity: String;
  dataSentitivitylevel: String;

  ////////////////////////////////////////////////////

  ////////// Bring Agreements elements /////////////////////

  fieldsbutton: Array<any>   = [
    {
      type: "checkbox",
      label: "Accept Terms",
      name: "term",
      value: true
    },
    {
      type: "button",
      label: "Save"
    }
  ];

  fieldsGeneral: Array<any>   = [
    {
      type: "input",
      label: "Template Type",
      inputType: "text",
      name: "ttype",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Agreement Description",
      inputType: "text",
      name: "description",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Purpose",
      inputType: "text",
      name: "purpose",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Data Owner",
      inputType: "text",
      name: "owner",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Data Consumer",
      inputType: "text",
      name: "consumer",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "date",
      label: "Created_AT",
      name: "dob",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Date of Birth Required"
        }
      ]
    },
    {
      type: "select",
      label: "Compensation",
      name: "compensation",
      value: "PayWatYouWant",
      options: ["PayWatYouWant", "Compensation", "Subscription"]
    }
  ];

  fieldsNonSensitive: Array<any>  = [
    {
      type: "input",
      label: "Non Sensitive",
      inputType: "text",
      name: "nonsensitive",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    }
  ];

  fieldsSensitive: Array<any> = [
    {
      type: "input",
      label: "Applicable Laws",
      inputType: "text",
      name: "laws",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },

  ];
  fieldsDynamic: Array<any> = [
    {
      type: "input",
      label: "MaximumAvailable",
      inputType: "text",
      name: "maximumavailable",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "Downtime",
      inputType: "text",
      name: "downtime",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "MonthlyUptimePercentage",
      inputType: "text",
      name: "monthly",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "input",
      label: "TransactionperMinutes",
      inputType: "text",
      name: "transactionpm",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    }
  ];

  fieldsStatic: Array<any> = [
    {
      type: "radiobutton",
      label: " Collection Options",
      name: "staticaccess",
      options: ["Download", "Batch"],
      value: "Download"
    }
  ];

  fieldsPersonal: Array<any> = [
    {
      type: "input",
      label: "Data Processor",
      inputType: "text",
      name: "dataprocessor",
      validations: [
        {
          name: "required",
          validator: Validators.required,
          message: "Name Required"
        },
        {
          name: "pattern",
          validator: Validators.pattern("^[a-zA-Z]+$"),
          message: "Accept only text"
        }
      ]
    },
    {
      type: "radiobutton",
      label: "Data access Options",
      name: "access",
      options: ["Processing Only", "Data downloading"],
      value: "Processing Only"
    }
  ];

  fieldsNonPersonal: Array<any> = [
    {
      type: "select",
      label: "Applicable License",
      name: "license",
      value: "Creative Commons",
      options: ["Open Licences", "Creative Commons", "Private Licenses"]
    }
  ];



  ///////////////////////////////////////////////////////////




  get value() { return this.form.value; }

  constructor(
    private fb: FormBuilder,
    private service:  ProviderService,
    private agreementService: AgreementService) {}

  ngOnInit() {
    var test2 = this.service.getDataAsset();
    console.log('test2',test2);
    console.log('test2',test2[0]);

  //  this.fields = this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);

/////////////////  choose fields //////////////////////////////////////////////

this.dataContent = test2[2];
this.dataStaticity = test2[1];
this.dataSentitivitylevel = test2[0];


 if (this.dataContent == "Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Non Sensitive"){

   this.fields = this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);

 } else if  (this.dataContent == "Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Sensitive") {

   this.fields = this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsDynamic, this.fieldsSensitive, this.fieldsbutton);

 } else if (this.dataContent == "Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Non Sensitive"){

   this.fields =  this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsStatic, this.fieldsNonSensitive, this.fieldsbutton);

 } else if (this.dataContent == "Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Sensitive"){

   this.fields =  this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsStatic, this.fieldsSensitive, this.fieldsbutton);

 } else if (this.dataContent == "Non Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Non Sensitive"){

   this.fields =  this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);

 } else if  (this.dataContent == "Non Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Sensitive") {

   this.fields =  this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsSensitive, this.fieldsbutton);

 } else if (this.dataContent == "Non Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Non Sensitive"){

     this.fields =  this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsStatic, this.fieldsNonSensitive, this.fieldsbutton);

 } else {
     // (dataContent == "Non Personal Data" && PageCount =="Static" && PageCount == "Sensitive")
     this.fields =  this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsStatic, this.fieldsSensitive, this.fieldsbutton);
 }

////////////////////////////////////////////////////////////////////////////////////////
    /*this.fields = */ /* this.fieldService.getFields().subscribe(
    (value) => {
      console.log("value retrieved");
      console.log(value);
      this.fields = value;
      this.form = this.createControl();
    }
  ); */ /*
  this.fieldService.getFields().subscribe( value => {
    this.fields = value;


  }); */
  this.form = this.createControl();
    }

  onSubmit(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    //console.log(this.form.value);
    if (this.form.valid) {
      this.submit.emit(this.form.value);
      this.agreementService.registerTemplate(this.form.value).subscribe(data => {
        if (data.success) {
          console.log('You are now registers and can log in');
        } else {
          console.log('Something went wrong');
        }
      });

    } else {
      this.validateAllFormFields(this.form);
    }
  }

  createControl() {
    const group = this.fb.group({});
    this.fields.forEach(field => {
      console.log(field);
      if (field.type === "button") return;
      const control = this.fb.control(
        field.value,
        this.bindValidations(field.validations || [])
      );
      group.addControl(field.name, control);
    });
    return group;
  }

  bindValidations(validations: any) {
    if (validations.length > 0) {
      const validList = [];
      validations.forEach(valid => {
        validList.push(valid.validator);
      });
      return Validators.compose(validList);
    }
    return null;
  }

  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
    //  console.log(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  /*onRegister(fields:any){
    // Register template
    this.agreementService.registerTemplate(fields).subscribe(data => {
      if (data.success) {
        console.log('You are now registers and can log in');
      } else {
        console.log('Something went wrong');
      }
    });


  } */

}
