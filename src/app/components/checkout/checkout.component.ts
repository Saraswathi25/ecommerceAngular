import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/product.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{

  constructor(private prodService:ProductService,private router:Router ){}

  checkoutForm:FormGroup
  total:number=0;
  ngOnInit(){
    
    this.prodService.totalSubject.subscribe((data)=>{
      this.total=data
      console.log(this.total)
    })
    this.checkoutForm =new FormGroup(
      {
        firstname: new FormControl(''),
        lastname: new FormControl(''),
        address: new FormControl(''),
        city: new FormControl(''),
        state: new FormControl(''),
        zip: new FormControl(''),
        cardnumber: new FormControl(''),
        expirydate: new FormControl(''),
        cvv: new FormControl(''),


      }
    )
  }

  onSubmit(){
    if(this.checkoutForm.value){
      this.prodService.checkoutDetails(this.checkoutForm.value)
      this.router.navigate(['/thankyou'])
    }
  
  }

}
