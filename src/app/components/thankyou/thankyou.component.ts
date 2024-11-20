import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.css']
})
export class ThankyouComponent implements OnInit{

  shippingDetails:any;
  orderDetails:Array<any>=[];
  total:number=0;
  constructor(private prodService:ProductService){}

  ngOnInit(){
    this.prodService.shippingDetails$.subscribe((data) => {
      if (data) {
        this.shippingDetails = data;
        console.log('Received shipping details:', this.shippingDetails);
      }
    });
   this.orderDetails= this.prodService.getCartProducts()
   console.log(this.orderDetails)
   this.prodService.totalSubject.subscribe((data)=>{
    this.total=data
   })
  }

}
