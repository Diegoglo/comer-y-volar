import { Component } from '@angular/core';

interface Product {
  name: string;
  description: string;
  image: string;
  originalPrice: number;
  price: number;
  discount: number;
}

@Component({
  selector: 'app-ofertas',
  templateUrl: './ofertas.component.html',
  styleUrl: './ofertas.component.css'
})
export class OfertasComponent {

  cart: Product[] = [];

  products: Product[] = [
    {
      name: 'Completo Italiano',
      description: 'Completo chileno con palta, tomate y mayonesa.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 50,
      price: 40.00,
      discount: 20
    },
    {
      name: 'Completo As Italiano',
      description: 'Completo con salchicha asada, palta, tomate y mayonesa.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 45,
      price: 35.00,
      discount: 22
    },
    {
      name: 'Completo Dinamico',
      description: 'Completo con salchicha asada, tomate, mayonesa y mostaza.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 30,
      price: 20.00,
      discount: 33
    },
    {
      name: 'Empanada de Pino',
      description: 'Empanada tradicional chilena rellena de carne, cebolla, huevo y aceituna.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 20,
      price: 12.00,
      discount: 40
    },
    {
      name: 'Empanada de Queso',
      description: 'Empanada rellena de queso fundido.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 20,
      price: 15.00,
      discount: 25
    },
    {
      name: 'Empanada de Mariscos',
      description: 'Empanada rellena con una mezcla de mariscos frescos.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 30,
      price: 22.00,
      discount: 27
    },
    {
      name: 'Coca-Cola 500ml',
      description: 'Refresco Coca-Cola en botella de 500ml.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 15,
      price: 10.00,
      discount: 33
    },
    {
      name: 'Fanta 500ml',
      description: 'Refresco Fanta en botella de 500ml.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 15,
      price: 10.00,
      discount: 33
    },
    {
      name: 'Sándwich Barros Luco',
      description: 'Sándwich de carne y queso derretido en pan crujiente.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 60,
      price: 45.00,
      discount: 25
    },
    {
      name: 'Sándwich de Chacarero',
      description: 'Sándwich chileno con carne, porotos verdes, tomate y ají.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 75,
      price: 55.00,
      discount: 27
    },
    {
      name: 'Sándwich de Pollo',
      description: 'Sándwich con pechuga de pollo, lechuga, tomate y mayonesa.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 50,
      price: 40.00,
      discount: 20
    },
    {
      name: 'Sándwich Vegano',
      description: 'Sándwich vegano con hummus, aguacate, tomate y espinacas.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 45,
      price: 35.00,
      discount: 22
    },
    {
      name: 'Empanada de Jamón y Queso',
      description: 'Empanada rellena de jamón y queso.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 18,
      price: 14.00,
      discount: 22
    },
    {
      name: 'Empanada de Espinacas y Queso',
      description: 'Empanada rellena de espinacas frescas y queso.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 22,
      price: 16.00,
      discount: 27
    },
    {
      name: 'Pepsi 500ml',
      description: 'Refresco Pepsi en botella de 500ml.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 15,
      price: 10.00,
      discount: 33
    },
    {
      name: '7Up 500ml',
      description: 'Refresco 7Up en botella de 500ml.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 15,
      price: 10.00,
      discount: 33
    },
    {
      name: 'Sándwich de Carne Mechada',
      description: 'Sándwich con carne mechada, cebolla caramelizada y mayonesa.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 65,
      price: 50.00,
      discount: 23
    },
    {
      name: 'Completo del Chef',
      description: 'Completo con salchicha gourmet, palta, tomate, cebolla y salsa especial.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 55,
      price: 45.00,
      discount: 18
    },
    {
      name: 'Empanada de Pollo',
      description: 'Empanada rellena de pollo desmenuzado con especias.',
      image: 'https://via.placeholder.com/300',
      originalPrice: 25,
      price: 18.00,
      discount: 28
    }
    // Más productos
  ];

  addToCart(product: Product) {
    this.cart.push(product);
    console.log('Producto agregado al carrito:', product);
  }
}
