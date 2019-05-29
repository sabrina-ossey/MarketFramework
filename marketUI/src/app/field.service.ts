import { Injectable } from '@angular/core';
import { Validators } from '@angular/forms';
import { FieldConfig } from './field.interface';
import { HttpClient } from '@angular/common/http';
//import { SProviderService } from './s-provider.service';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { ProviderService } from './provider.service';
import { SProvider } from  './agreements/s-provider.model';
import { DATAASSET } from './mock-dataAsset';


@Injectable({
  providedIn: 'root'
})

export class FieldService {
  //fields :Array<any>=[];
  //dataAsset: SProvider[];
  dataAsset: string[] = [];

  dataContent: String;
  dataStaticity: String;
  dataSentitivitylevel: String;

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
      name: "name",
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
      name: "name",
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
      name: "name",
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
      name: "name",
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
      name: "name",
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
      name: "name",
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
      name: "name",
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

//url = 'http://localhost:3001/templates';

constructor(private service: ProviderService) { }

    getFields(){
      console.log("Get fields");
        return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);
      /* this.service.getDataAsset(
       this.dataContent = value.dataContent,
       this.dataStaticity = value.dataStaticity,
       this.dataSentitivitylevel = value.dataSentitivitylevel
     ); //modify and add http.get for api consumption


      //  this.dataContent = value.dataContent;
        //this.dataContent = this.dataAsset$.value.dataContent;
        //this.dataStaticity = value.dataStaticity;
        //this.dataSentitivitylevel = value.dataSentitivitylevel;

        if (this.dataContent == "Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Non Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);

        } else if  (this.dataContent == "Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Sensitive") {

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsDynamic, this.fieldsSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Non Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsStatic, this.fieldsNonSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsStatic, this.fieldsSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Non Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Non Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);

        } else if  (this.dataContent == "Non Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Sensitive") {

          return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Non Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Non Sensitive"){

            return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsStatic, this.fieldsNonSensitive, this.fieldsbutton);

        } else {
            // (dataContent == "Non Personal Data" && PageCount =="Static" && PageCount == "Sensitive")
            return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsStatic, this.fieldsSensitive, this.fieldsbutton);
        }
      }/*.subscribe((value) => {
        console.log("Retrieved value");
        console.log(value);

        this.dataContent = value.dataContent;
        //this.dataContent = this.dataAsset$.value.dataContent;
        this.dataStaticity = value.dataStaticity;
        this.dataSentitivitylevel = value.dataSentitivitylevel;

        if (this.dataContent == "Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Non Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);

        } else if  (this.dataContent == "Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Sensitive") {

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsDynamic, this.fieldsSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Non Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsStatic, this.fieldsNonSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsPersonal, this.fieldsStatic, this.fieldsSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Non Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Non Sensitive"){

          return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsNonSensitive, this.fieldsbutton);

        } else if  (this.dataContent == "Non Personal Data" && this.dataStaticity =="Dynamic" && this.dataSentitivitylevel == "Sensitive") {

          return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsDynamic, this.fieldsSensitive, this.fieldsbutton);

        } else if (this.dataContent == "Non Personal Data" && this.dataStaticity =="Static" && this.dataSentitivitylevel == "Non Sensitive"){

            return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsStatic, this.fieldsNonSensitive, this.fieldsbutton);

        } else {
            // (dataContent == "Non Personal Data" && PageCount =="Static" && PageCount == "Sensitive")
            return this.fieldsGeneral.concat(this.fieldsNonPersonal, this.fieldsStatic, this.fieldsSensitive, this.fieldsbutton);
        }
      });*/

}

//getFields(){ return this.http.get(`${this.url}/templateList`);}


}
