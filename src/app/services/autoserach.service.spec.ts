import { TestBed } from '@angular/core/testing';

import { AutoserachService } from './autoserach.service';

describe('AutoserachService', () => {
  let service: AutoserachService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutoserachService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
