import { TestBed, inject } from '@angular/core/testing';

import { ChartSelectService } from './chart-select.service';

describe('ChartSelectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChartSelectService]
    });
  });

  it('should be created', inject([ChartSelectService], (service: ChartSelectService) => {
    expect(service).toBeTruthy();
  }));
});
