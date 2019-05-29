import { TestBed, inject } from '@angular/core/testing';

import { SProviderService } from './s-provider.service';

describe('SProviderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SProviderService]
    });
  });

  it('should be created', inject([SProviderService], (service: SProviderService) => {
    expect(service).toBeTruthy();
  }));
});
