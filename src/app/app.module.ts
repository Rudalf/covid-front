import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VaccinationCenterSearchComponent } from './vaccination-center-search/vaccination-center-search.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VaccinationCenterChoiceComponent } from './vaccination-center-choice/vaccination-center-choice.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import { VaccinationReservationComponent } from './vaccination-reservation/vaccination-reservation.component';
import {FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MedecinListComponent } from './medecin-list/medecin-list.component';
import {MatTableModule} from '@angular/material/table';
import { FormGroup } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { SecuredComponent } from './secured/secured.component';


@NgModule({
  declarations: [
    AppComponent,
    VaccinationCenterSearchComponent,
    VaccinationCenterChoiceComponent,
    LoginComponent,
    VaccinationReservationComponent,
    MedecinListComponent,
    MenuComponent,
    HomeComponent,
    SecuredComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule, 
    MatButtonModule, 
    MatIconModule,
    ReactiveFormsModule,
    NgIf,
    MatDatepickerModule, 
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatInputModule,
    ]
})
export class AppModule { }
