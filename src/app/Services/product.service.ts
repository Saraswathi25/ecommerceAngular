import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../components/Models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  onProductClicked: EventEmitter<Product>= new EventEmitter<Product>();

  showProductDetails(prod: Product): void {
    console.log('Product selected in service:', prod); // Confirm product is emitted here
    this.onProductClicked.emit(prod); // Emit the product to listeners
  }
  
}
