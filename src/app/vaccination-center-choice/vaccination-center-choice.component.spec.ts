import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCenterChoiceComponent } from './vaccination-center-choice.component';

describe('VaccinationCenterChoiceComponent', () => {
  let component: VaccinationCenterChoiceComponent;
  let fixture: ComponentFixture<VaccinationCenterChoiceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccinationCenterChoiceComponent]
    });
    fixture = TestBed.createComponent(VaccinationCenterChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
