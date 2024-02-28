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

  getToken(user: string, pass: string) {
    let token = this.reqres.getLoginToken(user, pass);
    console.log(token);
  }

  login_click() {
    this.getToken("eve.holt@reqres.in", "cityslicka");
  }
}