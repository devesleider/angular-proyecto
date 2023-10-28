import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private url='http://localhost:8080/api/usuarios'

  constructor(private http: HttpClient) {}

    public getUsuarios() : Observable<any> {
      return this.http.get<any>(this.url);
    }

    
    public updateUserState(userId: number, newState: boolean): Observable<any> {
      // Define la URL completa para actualizar el estado del usuario
      const updateUrl = `http://localhost:8080/api/usuarios/estado/${userId}`;
    
      // Crea un objeto con el nuevo estado
      const body = { estado: newState };
    
      // Realiza una solicitud PUT para actualizar el estado del usuario
      return this.http.put(updateUrl, body);
    }
    
}





