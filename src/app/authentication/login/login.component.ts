import { Component } from '@angular/core';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private authService: AuthenticationService) {}

  login(): void {
    this.authService.login(this.credentials).subscribe(response => {
      // Assuming the backend returns a token upon successful login
      const token = response.token;
      // Store the token in local storage
      localStorage.setItem('token', token);
    });
  }
}