import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProviderService } from '../provider.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.css']
})
export class ServiceProviderComponent implements OnInit {
  providers$: Observable<Provider[]>;
  selectedId: number;


  constructor(private service: ProviderService ,
    private route: ActivatedRoute) {}


    ngOnInit(){
      this.providers$ = this.route.paramMap.pipe(
        switchMap(params => {
          this.selectedId = +params.get('id');
          return this.service.getProviders();
        })
      );
    }
  }
