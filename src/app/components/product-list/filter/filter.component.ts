import { Component,EventEmitter,Input ,Output} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  selectedRadio :string='all';
  //parent to child
  @Input()
  all:number=0;
  @Input()
  inStock:number=0;
  @Input()
  outOfStock=0

  //child to parent
  @Output()
  selectedRadioValue :EventEmitter<string> =new EventEmitter<string>();
  
  onRadioChange(){
  console.log(this.selectedRadio)
  this.selectedRadioValue.emit(this.selectedRadio)
  }

}
