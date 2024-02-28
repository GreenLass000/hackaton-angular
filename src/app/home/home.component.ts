import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';
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
  page: number = 1;
  minpage: number = 1;
  maxpage: number = 2;
  constructor(private router: Router, private reqres: ReqresService) {
    this.userLogin = localStorage.getItem("user");

    if (this.userLogin == null) {
      this.router.navigateByUrl("/login");
    } else {
      this.reqres.retornarTodos(this.page).subscribe(result => this.data = result);


    }

  }

  borrar(id: number) {

  }
  editar(id: number) {

  }

  anterior() {
    if (this.page > this.minpage) {
      --this.page;
    }
    this.reqres.retornarTodos(this.page).subscribe(result => this.data = result);
  }
  
  posterior() {
    if (this.page < this.maxpage) {
      ++this.page;
    }
    this.reqres.retornarTodos(this.page).subscribe(result => this.data = result);
  }

  getDetail(id: number) {
    this.router.navigateByUrl('/user-detail/' + id);
  }
}
