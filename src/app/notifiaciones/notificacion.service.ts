import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  constructor(private snackBar: MatSnackBar) { }

  showSuccess(message: string, action = 'Cerrar') {
    this.snackBar.open(message, action, {
      duration: 3000, // Duración en milisegundos
      panelClass: ['success-snackbar'] // Opcional: Clase de panel CSS personalizada
    });
  }

  showError(message: string, action = 'Cerrar') {
    this.snackBar.open(message, action, {
      duration: 3000, // Duración en milisegundos
      panelClass: ['error-snackbar'] // Opcional: Clase de panel CSS personalizada
    });
  }
}

