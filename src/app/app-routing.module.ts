import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VaccinationCenterChoiceComponent } from './vaccination-center-choice/vaccination-center-choice.component';
import { VaccinationReservationComponent } from './vaccination-reservation/vaccination-reservation.component';
import { LoginComponent } from './authentication/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { SecuredComponent } from './secured/secured.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: "centers", component: VaccinationCenterChoiceComponent},
  { path: "reservation", component: VaccinationReservationComponent},
  { path: '', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'secured-route', component: SecuredComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
