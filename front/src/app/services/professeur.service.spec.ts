import { TestBed } from '@angular/core/testing';

import { ProfesseurService } from './professeur.service';

describe('AuthentificationService', () => {
  let service: ProfesseurService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfesseurService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
