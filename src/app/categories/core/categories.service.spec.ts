import { TestBed, inject } from '@angular/core/testing';

import { CategpriesService } from './categpries.service';

describe('CategpriesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategpriesService]
    });
  });

  it('should be created', inject([CategpriesService], (service: CategpriesService) => {
    expect(service).toBeTruthy();
  }));
});
