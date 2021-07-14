import { TestBed } from '@angular/core/testing';

import { InLibService } from './in-lib.service';

describe('InLibService', () => {
  let service: InLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
