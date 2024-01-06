import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesseurPopupComponent } from './professeur-popup.component';

describe('ProfesseurPopupComponent', () => {
  let component: ProfesseurPopupComponent;
  let fixture: ComponentFixture<ProfesseurPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesseurPopupComponent]
    });
    fixture = TestBed.createComponent(ProfesseurPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
