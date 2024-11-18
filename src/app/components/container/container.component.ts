import { Component,Input, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductService } from 'src/app/Services/product.service';
import { Product } from '../Models/Product';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent  implements OnInit{
  @Input()
  searchText:String=''
  prod:Product
  
  //passing selected product value to product detail comp using viewchild(using viewchild we are getting the value from child the first)
  //viewchild will have selector always that provides ref to that html ele in this case it s prod list component
 // @ViewChild(ProductListComponent) prodListComp :ProductListComponent;
 constructor(private prodService:ProductService){

 }
 ngOnInit(){
  this.prodService.onProductClicked.subscribe((data)=>{
    this.prod=data;
  })
 }

  onSearch(e:any){
  this.searchText=e;
  }

}
