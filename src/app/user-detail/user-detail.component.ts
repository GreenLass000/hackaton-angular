import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  constructor(private router:Router){}

  btnClick() {
    this.router.navigateByUrl('/login');
  };
}
