import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ReqresService} from '../reqres.service';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  usuario:any;

  constructor(private router:Router,private usuarioUnicoSErvicio:ReqresService){
    this.usuario=this.usuarioUnicoSErvicio.retornarUno(2);
  }

  btnClick() {
    this.router.navigateByUrl('/login');
  };
}
