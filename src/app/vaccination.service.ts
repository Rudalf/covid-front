import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { VaccinationCenter } from './vaccination-center';
import { NewVaccinationCenter } from './new-vaccination-center';
import { AuthenticationService } from './authentication/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class VaccinationService {

  constructor(private httpclient: HttpClient, private authService: AuthenticationService) {}

  getSecureData(): Observable<any> {
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    
    return this.httpclient.get('/api/secure-data', { headers });
  }

  
  getAllCenters() : Observable<VaccinationCenter[]>{
    return this.httpclient.get<VaccinationCenter[]>("api/centres/read");
  }

  createCenter(centre : NewVaccinationCenter) : Observable<NewVaccinationCenter>{
    return this.httpclient.post<NewVaccinationCenter>("api/centres/create", centre);
  }

  getCentersByVille(ville : string) : Observable<VaccinationCenter[]>{
    return this.httpclient.get<VaccinationCenter[]>("api/centres/" + ville);
  }
}
