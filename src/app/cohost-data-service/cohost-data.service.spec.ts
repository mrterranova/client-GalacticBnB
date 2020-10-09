
import { TestBed } from '@angular/core/testing';

import { CohostDataService } from './cohost-data.service';

describe('CohostDataService', () => {
  let service: CohostDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CohostDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
