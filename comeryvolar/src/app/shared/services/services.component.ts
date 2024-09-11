import { Component } from '@angular/core';



declare var bootstrap: any; // Para usar los modales de Bootstrap

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

  tiendaSeleccionada: any;

  tiendas = [
    {
      nombre: 'El Sabroso Food Truck',
      descripcion: 'Disfruta de los mejores completos y empanadas chilenas, elaborados con ingredientes frescos y locales.',
      imagen: 'imagenes/foodtruck.jpg',
      direccion: 'Av. Principal 123, Santiago',
      ubicacion: 'Santiago, Chile'
    },
    {
      nombre: 'La Parrilla Rodante',
      descripcion: 'Carnes asadas al estilo tradicional, con una variedad de cortes y salsas, perfecto para los amantes del buen asado.',
      imagen: 'imagenes/foodtruck.jpg',
      direccion: 'Calle Falsa 456, Valparaíso',
      ubicacion: 'Valparaíso, Chile'
    },
    {
      nombre: 'Sabores del Mundo',
      descripcion: 'Un viaje culinario a través de los sabores internacionales, con platos de diferentes partes del mundo.',
      imagen: 'imagenes/foodtruck.jpg',
      direccion: 'Plaza Central 789, Viña del Mar',
      ubicacion: 'Viña del Mar, Chile'
    }
  ];


  abrirModal(tienda: any) {
    this.tiendaSeleccionada = tienda;
    const modal = new bootstrap.Modal(document.getElementById('tiendaModal'));
    modal.show();
  }
  
}
