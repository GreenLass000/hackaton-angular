import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  constructor(private http: HttpClient) { }

  /**
   * Hace una solicitud de login y devuelve un token si es correcto
   * 
   * @param user Usuario
   * @param pass Contraseña
   * @returns Token de acceso
   */
  getLoginToken(user: string, pass: string) {

    let json = {
      email: user,
      password: pass
    };

    return this.http.post("https://reqres.in/api/login", JSON.stringify(json))
  }

  // Consultar todos los usuarios
  retornarTodos(pagina: number) {
    // let consulta=this.http.get(`https://reqres.in/api/users?page=${pagina}`);

    // return consulta.data;
    return this.http.get(`https://reqres.in/api/users?page=${pagina}`).pipe(
      map((response: any) => response.data) // Mapear el resultado para devolver solo la propiedad 'data'
    );
  }

  // Consultar un unico usuario
  retornarUno(user: number) {
    return this.http.get(`https://reqres.in/api/users/${user}`);
  }

  // Insertar
  insertarUsuario(usuario: any) {
    return this.http.post('https://reqres.in/api/users', JSON.stringify(usuario));
  }

  // Actualizar
  actualizarUsuario(usur: number, usuario: any) {
    return this.http.put(`https://reqres.in/api/users/${usur}`, JSON.stringify(usuario));
  }

  // Borrar
  borrarUsuario(user: number) {
    return this.http.delete(`https://reqres.in/api/users/${user}`)
  }
}
