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
page:any;
  constructor(private router: Router, private reqres: ReqresService) {
    this.userLogin = localStorage.getItem("user");

    if (this.userLogin == null) {
      this.router.navigateByUrl("/login");
    } else {
      this.reqres.retornarTodos(1).subscribe(result => this.data = result);

    }
  }

  borrar(id: number) {

  }
  editar(id: number) {

  }

  getDetail(id:number){
    this.router.navigateByUrl('/user-detail/'+id);
  }
}
