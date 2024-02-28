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
  @ViewChild('loginForm') loginForm: NgForm; // (o usa formularios reactivos)

  login_click(e: Event) {
    e.preventDefault();
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
      this.getLogin(email, password);
    } else {
      console.error('Form is invalid');
    }
  }

  getLogin(mail: string, pass: string) {
    this.reqres.getLoginToken(mail, pass).subscribe((t: any) => {
      localStorage.setItem("test", t.token);
    })
  }

  // login_click(e: Event) {
  //   e.preventDefault()
  //   this.getLogin("eve.holt@reqres.in", "cityslicka");
  // }
}