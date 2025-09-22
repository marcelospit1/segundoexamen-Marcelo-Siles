import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
// 1. Pedir permiso al usuario
  requestNotificationPermission() {
    if ('Notification' in window) {
      Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
          alert('Permiso para notificaciones concedido ✅');
        } else {
          alert('Permiso para notificaciones denegado ❌');
        }
      });
    } else {
      alert('Las notificaciones no son compatibles en este navegador');
    }
  }

  // 2. Mostrar una notificación local de prueba
  showLocalNotification() {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification('¡Hola desde la PWA! 🎉', {
        body: 'Esta es una notificación local de prueba.',
        icon: 'assets/icons/icon-192x192.png' // usa un ícono de tu proyecto
      });
    } else {
      alert('Primero debes permitir las notificaciones.');
    }
  }
}
