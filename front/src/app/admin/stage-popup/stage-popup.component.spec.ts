import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StagePopupComponent } from './stage-popup.component';

describe('StagePopupComponent', () => {
  let component: StagePopupComponent;
  let fixture: ComponentFixture<StagePopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StagePopupComponent]
    });
    fixture = TestBed.createComponent(StagePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
