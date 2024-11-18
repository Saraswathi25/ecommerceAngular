import { Directive, ElementRef, OnInit } from "@angular/core";

@Directive({//meta Data place
    selector:'[setbackground]'
})
export class setBackground implements OnInit{

   // private element:ElementRef
    //whenever instance is created its constructor is called
    constructor(private element:ElementRef){
      // this.element=element
    }
    ngOnInit() {
        this.element.nativeElement.style.background='#ffa9cc';
        this.element.nativeElement.style.width= '5rem';
        this.element.nativeElement.style.height='2rem';
      
        
        
    }
   

}

