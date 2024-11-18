import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchText : string ='';

  // updateSearchText(e:any){
  //   this.searchText=e.target.value;
  // }

  @Output()
  emitSearchText :EventEmitter<string>=new EventEmitter<string>();

  onSearch(searchValue:HTMLInputElement){
    this.searchText =searchValue.value;
    this.emitSearchText.emit(this.searchText)
  }
}
