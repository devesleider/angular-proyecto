import { Component } from '@angular/core';
import { ApiService } from '../../app/servicios/api/api.service';
import { NotificacionService } from 'src/app/notifiaciones/notificacion.service';


@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent {

  data: any[] = [];
  estado: boolean = false;
  usuarioId: number; // Define la propiedad usuarioId

  constructor(private apiservice: ApiService, private notificationService: NotificacionService) {
    // Inicializa el valor de usuarioId aquí o asigna un valor inicial
    this.usuarioId = 0; // Puedes asignar un valor inicial si es apropiado
  }
  

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiservice.getUsuarios().subscribe(data => {
      this.data = data;
      this.data.sort((a, b) => (a.estado === b.estado) ? 0 : a.estado ? -1 : 1);

      console.log(this.data);
    });
  }

  cambiarEstado(userId: number, newState: boolean) {
    this.apiservice.updateUserState(userId, newState).subscribe(response => {
      // Actualiza el estado en tu componente con el nuevo estado del servidor
      this.estado = newState;
      this.notificationService.showSuccess('Estado actualizado con éxito');
      // Maneja la respuesta del servidor aquí, como mostrar un mensaje de éxito o actualizar la lista de usuarios si es necesario.
    });
  }

  toggleEstado( userId: number) {
    // Invierte el valor del estado local
    this.usuarioId = userId;
    this.estado = !this.estado;
    // Llama a tu función para actualizar el estado en el servidor aquí
    this.cambiarEstado(this.usuarioId, this.estado);
  }

  actualizarEstadoEnLista(userId: number, newState: boolean) {
    const usuarioIndex = this.data.findIndex(user => user.idusuario === userId);
    if (usuarioIndex !== -1) {
      this.data[usuarioIndex].estado = newState;
    }
  }
  
}
