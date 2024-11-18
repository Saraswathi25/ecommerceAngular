import { Component,Input } from '@angular/core';
import { Product } from '../Models/Product';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  selectedProduct:Product;
  

  constructor(private prodService:ProductService){

  }
  productList: any=[
    {
      "id": 1,
      "title": "Croissant",
      "description": "A buttery and flaky French pastry, perfect for breakfast.",
      "price": 2.99,
      "stock": 50,
      "inStock":true,
      "quantity":1,
      "discountPercentage": 10,
      "image": "assets/croissant.png"
    },
    {
      "id": 2,
      "title": "Bagel",
      "description": "A dense, chewy bagel, available in plain, sesame, and poppy seed.",
      "price": 1.99,
      "stock": 100,
      "inStock":true,
      "quantity":1,
      "discountPercentage": 5,
      "image": "assets/bagel.png"
    },
    {
      "id": 3,
      "title": "Donut",
      "description": "A tangy and rustic sourdough loaf made from natural yeast.",
      "price": 4.99,
      "stock": 0,
      "inStock":false,
      "quantity":1,
      "discountPercentage": 12,
      "image": "assets/donut.png"
    },
    {
      "id": 4,
      "title": "Chocolate Muffin",
      "description": "A rich and moist muffin filled with chocolate chips.",
      "price": 3.49,
      "stock": 75,
      "inStock":true,
      "quantity":1,
      "discountPercentage": 8,
      "image": "assets/muffin.png"
    },
    {
      "id": 5,
      "title": "Cookies",
      "description": "A soft and crumbly cookie filled with chocochips.",
      "price": 3.25,
      "stock": 60,
      "inStock":true,
      "quantity":1,
      "discountPercentage": 10,
      "image": "assets/cookies.png"
    },
    {
      "id": 6,
      "title": "Flat Bread",
      "description": "A classic French baguette with a crispy crust and soft interior.",
      "price": 2.49,
      "stock": 90,
      "inStock":true,
      "quantity":1,
      "discountPercentage": 7,
      "image": "assets/bread.png"
    },
    {
      "id": 7,
      "title": "Cinnamon Roll",
      "description": "A sweet cinnamon roll topped with cream cheese frosting.",
      "price": 3.99,
      "stock": 55,
      "inStock":true,
      "quantity":1,
      "discountPercentage": 10,
      "image": "assets/cinnamon-roll.png"
    },
    {
      "id": 7,
      "title": "Cupcake",
      "description": "A sweet Cupcake topped with cream cheese frosting.",
      "price": 2.99,
      "stock": 45,
      "inStock":true,
      "quantity":1,
      "discountPercentage": 5,
      "image": "assets/cake.png"
    }

  ]
  
  @Input()
  searchText:String='';
  get filteredProducts() {
    return this.productList.filter(product => {
      const matchesSearch = this.searchText === '' || product.title.toLowerCase().includes(this.searchText.toLowerCase());
      const matchesStock = this.selectedRadioButton === 'all' || (product.stock > 0).toString() === this.selectedRadioButton;

      return matchesSearch && matchesStock;
    });
  }

  // onSelectedProduct(product: Product){
  //   this.selectedProduct=product
  // }
  totalProducts =this.productList.length;
  inStockProducts= this.productList.filter(p=> p.stock > 0).length
  outOfStock= this.productList.filter(p=> p.stock === 0).length
  selectedRadioButton:string='all'

  onValueChange(value:any){
   this.selectedRadioButton=value
   //console.log(this.selectedRadioButton)
  }
  onProductClicked(prod:Product){
   
    this.prodService.showProductDetails(prod);

  }

 
}
