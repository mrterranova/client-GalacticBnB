import { TestBed } from '@angular/core/testing';

import { TtkDataService } from './ttk-data.service';

describe('TtkDataService', () => {
  let service: TtkDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TtkDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
