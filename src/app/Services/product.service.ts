import { EventEmitter, Injectable } from '@angular/core';
import { Product } from '../components/Models/Product';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private cartProducts: Product[] = [];
  onProductClicked: EventEmitter<Product>= new EventEmitter<Product>();

  cartUpdated: EventEmitter<Product[]>=new EventEmitter<Product[]>();

  total: EventEmitter<number>= new EventEmitter<number>();
  
  totalSubject = new BehaviorSubject<number>(0);
  
  private shippingDetailsSubject = new BehaviorSubject<any>(null); // Using BehaviorSubject
  shippingDetails$ = this.shippingDetailsSubject.asObservable();

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

  updateTotal(total:number){
    this.totalSubject.next(total)
  }

  checkoutDetails(checkoutForm){
    this.shippingDetailsSubject.next(checkoutForm);

  }
}
