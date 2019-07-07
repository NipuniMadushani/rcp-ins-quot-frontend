import { TestBed } from '@angular/core/testing';

import { ThemeeService } from './themee.service';

describe('ThemeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeeService = TestBed.get(ThemeeService);
    expect(service).toBeTruthy();
  });
});
