import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MwvNavbarComponent } from './mwv-navbar.component';

describe('MwvNavbarComponent', () => {
  let component: MwvNavbarComponent;
  let fixture: ComponentFixture<MwvNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MwvNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MwvNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
