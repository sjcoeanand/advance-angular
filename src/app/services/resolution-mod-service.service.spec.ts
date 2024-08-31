import { TestBed } from '@angular/core/testing';

import { ResolutionModServiceService } from './resolution-mod-service.service';

describe('ResolutionModServiceService', () => {
  let service: ResolutionModServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolutionModServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
