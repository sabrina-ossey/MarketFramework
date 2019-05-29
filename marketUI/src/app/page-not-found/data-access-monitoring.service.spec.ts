import { TestBed, inject } from '@angular/core/testing';

import { DataAccessMonitoringService } from './data-access-monitoring.service';

describe('DataAccessMonitoringService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataAccessMonitoringService]
    });
  });

  it('should be created', inject([DataAccessMonitoringService], (service: DataAccessMonitoringService) => {
    expect(service).toBeTruthy();
  }));
});
