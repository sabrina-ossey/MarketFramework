import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";


import { SProvider } from "../s-provider.model";
import { SProviderService } from "../s-provider.service";

@Component({
  selector: 'app-asset-details',
  templateUrl: './asset-details.component.html',
  styleUrls: ['./asset-details.component.css']
})
export class AssetDetailsComponent implements OnInit {
    sProvider: SProvider[];

    public dataContent: string;
    public dataStaticity: string;
    public dataSentitivitylevel: string;

  constructor(private sProviderService: SProviderService, private route: ActivatedRoute) {
    this.dataContent = '';
    this.dataStaticity = '';
    this.dataSentitivitylevel = '';
   }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    this.sProviderService.get(id)
      .subscribe((data: SProvider[]) => {
        this.sProvider = data;
        console.log(this.sProvider);
          this.sProviderService.setLocalStorageChoices(this.sProvider);
       });



    //  this.sProviderService.addDataAssetChoice(this.sProviderdataContent, this.sProvider.dataStaticity, this.sProvider.dataSentitivitylevel );
}


}
