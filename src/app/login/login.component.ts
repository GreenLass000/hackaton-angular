import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  checkLogin() {
    let user: string | null = localStorage.getItem("user");
    console.log(user);
  }

  login_click() {
    this.checkLogin();
  }
}