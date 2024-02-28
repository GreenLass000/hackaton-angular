import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  userLogin: any;
  url:string="https://tmr9vjvd-4200.uks1.devtunnels.ms/";
  constructor(private router: Router) {
    this.userLogin = localStorage.getItem("user");
    
     if(this.userLogin==null){
       this.router.navigateByUrl(this.url+"login");
    //console.log("login "+this.userLogin);
     }else{

     }
  }
}
