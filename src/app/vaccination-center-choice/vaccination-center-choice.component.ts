import { Component, Input  } from '@angular/core';
import { VaccinationService } from '../vaccination.service';
import { VaccinationCenter } from '../vaccination-center';

@Component({
  selector: 'app-vaccination-center-choice',
  templateUrl: './vaccination-center-choice.component.html',
  styleUrls: ['./vaccination-center-choice.component.scss']
})
export class VaccinationCenterChoiceComponent {
  @Input() center: VaccinationCenter | undefined;

  constructor(private service : VaccinationService){ }


  choose(){
    console.log(this.center)
  }
}
