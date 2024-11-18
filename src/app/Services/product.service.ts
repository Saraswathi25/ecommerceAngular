import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../components/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private cartProducts: Product[] = [];
  onProductClicked: EventEmitter<Product>= new EventEmitter<Product>();

  cartUpdated: EventEmitter<Product[]>=new EventEmitter<Product[]>();

  showProductDetails(prod: Product): void {
    console.log('Product selected in service:', prod); // Confirm product is emitted here
    this.onProductClicked.emit(prod); // Emit the product to listeners
  }

  addToCart(prod: Product) {
    console.log('Adding product to cart:', prod);
    this.cartProducts.push(prod); // Add the product to the array
    this.cartUpdated.emit([...this.cartProducts]); // Emit the updated cart
  }
  
  getCartProducts(): Product[] {
    return [...this.cartProducts]; // Return a copy of the cart
  }
}
