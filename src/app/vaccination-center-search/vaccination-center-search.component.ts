import { Component, OnInit } from '@angular/core';
import { VaccinationCenter } from '../vaccination-center';
import { VaccinationService } from '../vaccination.service';

@Component({
  selector: 'app-vaccination-center-search',
  templateUrl: './vaccination-center-search.component.html',
  styleUrls: ['./vaccination-center-search.component.scss']
})
export class VaccinationCenterSearchComponent implements OnInit{
  allcenters?: VaccinationCenter[];

  centers?: VaccinationCenter[];
  ville: string = '';

  constructor(private service : VaccinationService){ }

  ngOnInit(): void {
      this.service.getAllCenters().subscribe(resultCenters =>{
        this.allcenters = resultCenters;
        this.centers = resultCenters;
      });
  }

  FiltreVilles(event: any): void {
    if(this.ville !== "")
      this.service.getCentersByVille(this.ville).subscribe(resultCenters =>{
        console.log(resultCenters)
        this.centers = resultCenters;
      });
    else
      this.centers = this.allcenters

    }




}
