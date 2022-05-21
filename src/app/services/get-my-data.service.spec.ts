import { TestBed } from '@angular/core/testing';

import { GetMyDataService } from './get-my-data.service';

describe('GetMyDataService', () => {
  let service: GetMyDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetMyDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
