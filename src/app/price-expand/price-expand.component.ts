import { Component, OnInit } from '@angular/core';
import { min } from 'moment';

@Component({
  selector: 'app-price-expand',
  templateUrl: './price-expand.component.html',
  styleUrls: ['./price-expand.component.css']
})
export class PriceExpandComponent implements OnInit {


  minprice:number = 0;
  maxprice:number = 10000;

  constructor() { }



  ngOnInit(): void {
  }

  increaseMin() {
    this.minprice++;
  }

  decreaseMin() {
    if(this.minprice <=1 )
    this.minprice--;
  }

  increaseMax() {
    this.maxprice++;
  }

  decreaseMax() {
    if(this.maxprice > this.minprice )
    this.maxprice--;
  }

}
