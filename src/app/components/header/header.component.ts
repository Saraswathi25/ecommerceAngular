import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  constructor(private prodService:ProductService){

  }
  cartProduct:any;
  ngOnInit(){
   this.prodService.cartUpdated.subscribe((data)=>{
    this.cartProduct=data
   })
  }

}
