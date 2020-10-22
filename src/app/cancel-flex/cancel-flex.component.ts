import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-flex',
  templateUrl: './cancel-flex.component.html',
  styleUrls: ['./cancel-flex.component.css']
})
export class CancelFlexComponent implements OnInit {
  
  show: boolean = false;
  select: boolean = false;

  constructor() { }

  displayToggle():void{
    this.show = !this.show;
    console.log(this.show)
  }

  checkToggle():void{
    this.select = !this.select;
    document.getElementById("tdrindiv").classList.add("activeCheck0");
    document.getElementById("tdrbutton").classList.add("activeCheck1");
    document.getElementById("tdrindiv").classList.add("activeCheck2");
    console.log(this.select)
  }

  ngOnInit(): void {
  }

}
