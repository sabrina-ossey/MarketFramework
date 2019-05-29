import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { UploadService } from '../upload.service';
import { HttpClient, HttpEventType, HttpErrorResponse } from '@angular/common/http';
import { SProvider } from '../../agreements/s-provider.model';
import { ProviderService } from '../../provider.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  selectedFile: File = null;
  finishLoad = false;
  //var fileData = string[];
  url = '';
  dataAsset: SProvider[];


  constructor(public http: HttpClient, public dialogRef: MatDialogRef<DialogComponent>, public service: ProviderService) { }

  ngOnInit() {}

  onFileSelected(event) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
}


   onUpload(){

     let reader = new FileReader();

     reader.onload = (event) => {

     var test = JSON.parse(reader.result);


    // var test = this.service.getDataAsset(this.dataAsset.dataStaticity, this.dataAsset.dataSentitivitylevel, this.dataAsset.dataContent);
     console.log('test', test);
    // console.log('test content', test.dataContent);
     var test1 = this.service.setDataAsset(test.dataContent, test.dataSentitivitylevel, test.dataStaticity);
    // var test2 = this.service.getDataAsset();
     //console.log('test2',test2);
     //console.log('data Asset sensitivity level', test.dataSentitivitylevel);
     //console.log('data Asset content', test.dataContent);
   };

     reader.readAsText(this.selectedFile);
   }


  /*  onUpload(){
      console.log("upload...");
      //console.log('this.selectedFile', this.selectedFile1);
      const fd = new FormData();
      fd.append('file', this.selectedFile, this.selectedFile.name);
      console.log('fd', fd);
    /*  this.http.get(JSON.stringify(this.selectedFile1)).subscribe(
        data => {
          this.arrBirds = data as string [];
          console.log('ok');
          console.log(this.arrBirds[1]);
        },
        (err: HttpErrorResponse) => {
          console.log(err.message);
        }
  ); */
      /*const fd = new FormData();
      fd.append('file', this.selectedFile, this.selectedFile.name);
      console.log('fd', fd);
      this.http.post('http://localhost:8000/upload', fd, {
        reportProgress: true,
        observe:'events'
      })
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
            //console.log('Upload Progress:' + Math.round(event.loaded / event.total) * 100 + '%');
            let percentDone = Math.round(100 * event.loaded / event.total);
            if( percentDone === 100) {
              this.finishLoad = true;
            }
            console.log('this.finishLoad', this.finishLoad);
        } else if(event.type === HttpEventType.Response) {
          console.log(event);
        }

      });
    } */

    onClose(){
      if (this.finishLoad == true) {
        return this.dialogRef.close();
      }

    }

    readData(){


}


  }
