import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-flex',
  templateUrl: './cancel-flex.component.html',
  styleUrls: ['./cancel-flex.component.css']
})
export class CancelFlexComponent implements OnInit {
  
  show: boolean = false;

  constructor() { }

  displayToggle():void{
    this.show = !this.show;
    console.log(this.show)
  }

  ngOnInit(): void {
  }

}
