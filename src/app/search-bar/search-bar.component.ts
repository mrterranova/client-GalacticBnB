import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  expand:boolean = false;

  showTop:boolean = false;
  adults = 0;
  children = 0;
  infants = 0;
  guests_expand:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  receiveAdults($event){
    this.adults = $event
  }

  receiveChildren($event){
    this.children = $event
  }

  receiveInfants($event){
    this.infants = $event
  }

}
