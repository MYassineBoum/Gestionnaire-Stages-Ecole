import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuteurPopupComponent } from './tuteur-popup.component';

describe('TuteurPopupComponent', () => {
  let component: TuteurPopupComponent;
  let fixture: ComponentFixture<TuteurPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuteurPopupComponent]
    });
    fixture = TestBed.createComponent(TuteurPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
