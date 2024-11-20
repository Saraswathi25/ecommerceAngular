import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Models/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;

  constructor(private prodService: ProductService,private router :Router) {}

  ngOnInit() {
   
    this.products = this.prodService.getCartProducts();
    console.log('Initial cart products:', this.products);

   
    this.updateTotal();

   
    this.prodService.cartUpdated.subscribe((updatedCart: Product[]) => {
      console.log('Cart updated in CartComponent:', updatedCart);
      this.products = updatedCart;
      this.updateTotal(); 
    });
  }

  
  decreaseQuantity(index: number) {
    if (this.products[index].quantity > 1) {
      this.products[index].quantity--;
    }
    this.updateTotal(); 
  }

  
  increaseQuantity(index: number) {
    this.products[index].quantity++;
    this.updateTotal(); 
  }

  
  updateTotal() {
    this.total = this.products.reduce((sum, product) => {
      return sum + product.price * product.quantity;
    }, 0);
  }

  checkout() {
    this.prodService.updateTotal(this.total)
    this.router.navigate(['/checkout']);
  }
}  
