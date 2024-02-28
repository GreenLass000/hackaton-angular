import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {ReqresService} from '../reqres.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  standalone: true,
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent {
  usuario:any;
  tipo:any;


  constructor(private router:Router,private usuarioUnicoServicio:ReqresService,private activate:ActivatedRoute){
    this.tipo = this.activate.snapshot.url[1].path;
    this.usuarioUnicoServicio.retornarUno(this.tipo).subscribe(result => this.usuario = result);
  }

  btnLogin() {
    this.router.navigateByUrl('/login');
  };

  btnHome(){
    this.router.navigateByUrl('/home');
  }
}
