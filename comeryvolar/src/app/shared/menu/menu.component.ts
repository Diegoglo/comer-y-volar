import { Component } from '@angular/core';
import { Product} from '../../../core/model/product.model'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  productos: Product[] = [
    {
      name: 'Completo Italiano',
      description: 'Completo chileno con palta, tomate y mayonesa.',
      price: 40.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Completo As Italiano',
      description: 'Completo con salchicha asada, palta, tomate y mayonesa.',
      price: 35.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Completo Dinamico',
      description: 'Completo con salchicha asada, tomate, mayonesa y mostaza.',
      price: 20.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Empanada de Pino',
      description: 'Empanada tradicional chilena rellena de carne, cebolla, huevo y aceituna.',
      price: 12.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Empanada de Queso',
      description: 'Empanada rellena de queso fundido.',
      price: 15.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Empanada de Mariscos',
      description: 'Empanada rellena con una mezcla de mariscos frescos.',
      price: 22.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Coca-Cola 500ml',
      description: 'Refresco Coca-Cola en botella de 500ml.',
      price: 10.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Fanta 500ml',
      description: 'Refresco Fanta en botella de 500ml.',
      price: 10.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Sándwich Barros Luco',
      description: 'Sándwich de carne y queso derretido en pan crujiente.',
      price: 45.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Sándwich de Chacarero',
      description: 'Sándwich chileno con carne, porotos verdes, tomate y ají.',
      price: 55.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Sándwich de Pollo',
      description: 'Sándwich con pechuga de pollo, lechuga, tomate y mayonesa.',
      price: 40.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Sándwich Vegano',
      description: 'Sándwich vegano con hummus, aguacate, tomate y espinacas.',
      price: 35.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Empanada de Jamón y Queso',
      description: 'Empanada rellena de jamón y queso.',
      price: 14.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Empanada de Espinacas y Queso',
      description: 'Empanada rellena de espinacas frescas y queso.',
      price: 16.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Pepsi 500ml',
      description: 'Refresco Pepsi en botella de 500ml.',
      price: 10.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: '7Up 500ml',
      description: 'Refresco 7Up en botella de 500ml.',
      price: 10.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Sándwich de Carne Mechada',
      description: 'Sándwich con carne mechada, cebolla caramelizada y mayonesa.',
      price: 50.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Completo del Chef',
      description: 'Completo con salchicha gourmet, palta, tomate, cebolla y salsa especial.',
      price: 45.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Empanada de Pollo',
      description: 'Empanada rellena de pollo desmenuzado con especias.',
      price: 18.00,
      image: 'https://via.placeholder.com/300'
    },
    {
      name: 'Empanada de Capresse',
      description: 'Empanada rellena de tomate, albahaca y mozzarella.',
      price: 20.00,
      image: 'https://via.placeholder.com/300'
    }
  ];
  
}
