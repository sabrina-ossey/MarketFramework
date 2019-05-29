import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DialogComponent } from './dialog/dialog.component';
import { UploadService } from './upload.service';
import { switchMap } from 'rxjs/operators';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { ProviderService } from '../provider.service';
import { Provider } from '../provider';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  provider$: Observable<Provider[]>;
  selectedId: number;

  constructor(
    public dialog: MatDialog,
    public uploadService: UploadService,
    public providerService: ProviderService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.provider$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.providerService.getProvider(params.get('id')))
    );
  }

  public openUploadDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { width: '50%', height: '50%' });
  }

}
