import { Component, inject, Input } from '@angular/core';
import { Product } from '../../Models/Product';
import { ProductListComponent } from '../../product-list/product-list.component';
import { setBackground } from '../../customDirectives/setBackground.directive';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent {
  

  //getting the value from parent 
  // @Input()
  // prodListComp :ProductListComponent=undefined;
  @Input() product: Product | null = null; 
  isDialogOpen: boolean = false; 
 
  constructor(private prodService: ProductService) {}
  ngOnInit(): void {
    // Subscribe to product click event
    this.prodService.onProductClicked.subscribe((data: Product) => {
      this.product = data;
      console.log('Product received in ProductDetailComponent:', data); 
      this.isDialogOpen = true; // Open the dialog when a product is clicked
    });
  }
  closeDialog() {
    this.isDialogOpen = false; // Close the dialog when "Close" button is clicked
  }

  addToCart(prod: Product) {
    if (prod) {
      console.log('Adding product to cart:', prod);
      this.prodService.addToCart(prod); 
      this.closeDialog()
    }
  }
  
}
