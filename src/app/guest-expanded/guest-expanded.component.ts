import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-guest-expanded',
  templateUrl: './guest-expanded.component.html',
  styleUrls: ['./guest-expanded.component.css']
})
export class GuestExpandedComponent implements OnInit {

  @Input() adults: number;
  @Input() children: number;
  @Input() infants: number;

  @Output() adultEvent = new EventEmitter<number>();
  @Output() childEvent = new EventEmitter<number>();
  @Output() infantEvent = new EventEmitter<number>();


  constructor() { }

  ngOnInit(): void {
  }

  sendNumberA(type) {
    this.adultEvent.emit(type);
  }

  sendNumberC(type) {
    this.childEvent.emit(type);
  }

  sendNumberI(type) {
    this.infantEvent.emit(type);
  }

  increaseA() {
    this.adults++;
    this.sendNumberA(this.adults);
  }

  decreaseA() {
    this.adults--;
    this.sendNumberA(this.adults);
  }

  increaseC() {
    this.children++;
    this.sendNumberC(this.children);
  }

  decreaseC() {
    this.children--;
    this.sendNumberC(this.children);
  }

  increaseI() {
    this.infants++;
    this.sendNumberI(this.infants);
  }

  decreaseI() {
    this.infants--;
    this.sendNumberI(this.infants);
  }

}
