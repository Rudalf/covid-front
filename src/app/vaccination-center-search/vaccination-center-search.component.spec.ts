import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationCenterSearchComponent } from './vaccination-center-search.component';

describe('VaccinationCenterSearchComponent', () => {
  let component: VaccinationCenterSearchComponent;
  let fixture: ComponentFixture<VaccinationCenterSearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccinationCenterSearchComponent]
    });
    fixture = TestBed.createComponent(VaccinationCenterSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
