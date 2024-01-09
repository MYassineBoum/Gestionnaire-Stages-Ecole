import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EtudiantPopupComponent } from './etudiant-popup.component';

describe('EtudiantPopupComponent', () => {
  let component: EtudiantPopupComponent;
  let fixture: ComponentFixture<EtudiantPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EtudiantPopupComponent]
    });
    fixture = TestBed.createComponent(EtudiantPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
