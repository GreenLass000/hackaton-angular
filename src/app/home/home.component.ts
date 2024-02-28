import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { ReqresService } from '../reqres.service';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userLogin: any;
  data: any;
  constructor(private router: Router, private reqres: ReqresService) {
    this.userLogin = localStorage.getItem("user");

    if (this.userLogin == null) {
      this.router.navigateByUrl("/login");
      //console.log("login "+this.userLogin);
    } else {
      this.reqres.retornarTodos(1).subscribe(result => {this.data = result; console.log(result)});
      
    }
  }


}
