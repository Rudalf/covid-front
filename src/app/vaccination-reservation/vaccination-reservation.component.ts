import { Component } from '@angular/core';
import {FormControl, Validators, ReactiveFormsModule, FormGroup} from '@angular/forms';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenter } from '../vaccination-center';
import { NewVaccinationCenter } from '../new-vaccination-center';

@Component({
  selector: 'app-vaccination-reservation',
  templateUrl: './vaccination-reservation.component.html',
  styleUrls: ['./vaccination-reservation.component.scss']
})
export class VaccinationReservationComponent {

  center?: VaccinationCenter;

  centers?: VaccinationCenter[];
  email = new FormControl('', [Validators.required, Validators.email]);

  profile = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  constructor(private service: VaccinationService){ }

  ngOnInit(): void {
    this.service.getAllCenters().subscribe(resultCenters=>{
      this.centers = resultCenters;
    })
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  reserver(){
    console.log(this.centers)

    const newCenter: NewVaccinationCenter = {
      // adresse : this.profile.value.firstName,
      adresse : "Nancy",
      nom: 'CHRU Nancy',
      ville: 'Nancy',
    };

    this.service.createCenter(newCenter).subscribe(
      (response: NewVaccinationCenter) => {
        console.log('Center created successfully:', response);
      },
      (error) => {
        console.error('Error creating center:', error);
      }
    )
  }


}
