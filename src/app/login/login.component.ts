import { Component } from '@angular/core';
import { ReqresService } from '../reqres.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private reqres: ReqresService) {
  }

  checkLogin() {
    let token: string | null = ;
    console.log(token);
  }

  login_click() {
    this.checkLogin();
  }
}