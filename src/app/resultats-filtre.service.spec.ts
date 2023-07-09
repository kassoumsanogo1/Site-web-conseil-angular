import { TestBed } from '@angular/core/testing';

import { ResultatsFiltreService } from './resultats-filtre.service';

describe('ResultatsFiltreService', () => {
  let service: ResultatsFiltreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResultatsFiltreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
