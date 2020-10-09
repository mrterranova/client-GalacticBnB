import { TestBed } from '@angular/core/testing';

import { TitlelistingService } from './titlelisting.service';

describe('TitlelistingService', () => {
  let service: TitlelistingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TitlelistingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
