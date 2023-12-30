import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VaccinationReservationComponent } from './vaccination-reservation.component';

describe('VaccinationReservationComponent', () => {
  let component: VaccinationReservationComponent;
  let fixture: ComponentFixture<VaccinationReservationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VaccinationReservationComponent]
    });
    fixture = TestBed.createComponent(VaccinationReservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
