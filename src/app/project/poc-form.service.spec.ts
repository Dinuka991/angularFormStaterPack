import { TestBed } from '@angular/core/testing';

import { PocFormService } from './poc-form.service';

describe('PocFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PocFormService = TestBed.get(PocFormService);
    expect(service).toBeTruthy();
  });
});
