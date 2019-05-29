import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataAssetInfoComponent } from './data-asset-info.component';

describe('DataAssetInfoComponent', () => {
  let component: DataAssetInfoComponent;
  let fixture: ComponentFixture<DataAssetInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataAssetInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataAssetInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
