import { TestBed } from '@angular/core/testing';

import { SidLibraryService } from './sid-library.service';

describe('SidLibraryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SidLibraryService = TestBed.get(SidLibraryService);
    expect(service).toBeTruthy();
  });
});
