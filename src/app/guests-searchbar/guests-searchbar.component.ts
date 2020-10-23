import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-guests-searchbar',
  templateUrl: './guests-searchbar.component.html',
  styleUrls: ['./guests-searchbar.component.css']
})
export class GuestsSearchbarComponent implements OnInit {

  @Input() adults: number;
  @Input() children:number;
  @Input() infants:number;
  expand:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getGuests(){
    return this.adults+this.children+this.infants;
  }

  displayGuests(){
    if(this.infants != 0) {
      return this.adults+this.children + " guests, " + this.infants + " infants";
    } else {
      return this.adults+this.children + " guests";
    }
  }

}
