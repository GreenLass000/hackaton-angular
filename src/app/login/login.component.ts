import { Component, OnInit } from '@angular/core';
import { ReqresService } from '../reqres.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  rememberMe = false;
  errorMessage = '';

  constructor(private readonly reqresService: ReqresService) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.errorMessage = '';

    if (!this.email || !this.password) {
      this.errorMessage = 'Por favor, ingrese un correo electrónico y contraseña.';
      return;
    }

    this.reqresService.getLoginToken(this.email, this.password).subscribe({
      next: (response) => {
        localStorage.setItem("user", response.token);
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
}
