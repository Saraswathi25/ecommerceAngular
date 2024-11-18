import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  quantity:number;
  constructor(private prodService: ProductService) {}

  ngOnInit() {
    // Load initial products in the cart
    this.products = this.prodService.getCartProducts();
    console.log('Initial cart products:', this.products);
  
    // Subscribe to cart updates
    this.prodService.cartUpdated.subscribe((updatedCart: Product[]) => {
      console.log('Cart updated in CartComponent:', updatedCart);
      this.products = updatedCart;
    });
  }
  
  // Decrease quantity of a product
  decreaseQuantity(index) {
    console.log(index)
    if (this.products[index].quantity > 1) {
      this.products[index].quantity--;
    }
  }

  // Increase quantity of a product
  increaseQuantity(index) {
   this.products[index].quantity++;
  }
}
