import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;

  submit(){
    console.log("user name is " + this.username)
    this.clear();
  }

  clear(){
    this.username ="";
    this.password = "";
    this.show = true;
  }

  hide = true;
}
