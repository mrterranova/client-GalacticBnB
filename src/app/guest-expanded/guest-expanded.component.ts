import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guest-expanded',
  templateUrl: './guest-expanded.component.html',
  styleUrls: ['./guest-expanded.component.css']
})
export class GuestExpandedComponent implements OnInit {

  adults:number = 0;
  children:number = 0;
  infants:number = 0;

  constructor() { }

  ngOnInit(): void {
  }

  increaseA() {
    this.adults++;
  }

  decreaseA() {
    this.adults--;
  }

  increaseC() {
    this.children++;
  }

  decreaseC() {
    this.children--;
  }

  increaseI() {
    this.infants++;
  }

  decreaseI() {
    this.infants--;
  }

}
