import { TestBed } from '@angular/core/testing';

import { MptsServiceService } from './mpts-service.service';

describe('MptsServiceService', () => {
  let service: MptsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MptsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
