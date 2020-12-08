import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from "@angular/router"
import { ResultsComponent } from '../results/results.component';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})

export class SearchBarComponent implements OnInit {
  

  expand: boolean = false;

  showTop: boolean = false;
  adults = 0;
  children = 0;
  infants = 0;
  guests_expand: boolean = false;
  size: string;
  square: number;
  value = '';
  update(value: string) { this.value = value; }

  
  constructor(private router: Router) {
  }

  ngOnInit(): void {

  }

  receiveAdults($event) {
    this.adults = $event;
  }

  receiveChildren($event) {
    this.children = $event;
  }

  receiveInfants($event) {
    this.infants = $event;
  }

  test() {
    this.ngOnInit();
  }

  collectStr(){
    var guests = this.adults + this.children + this.infants;
    var location = this.value;
    let navigationExtras: NavigationExtras = {
      queryParams: {
        "guests": guests, 
        "location": location
      }
    }; 
    this.router.navigate(["results"], navigationExtras);
  }
}
