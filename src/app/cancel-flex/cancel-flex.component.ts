import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-flex',
  templateUrl: './cancel-flex.component.html',
  styleUrls: ['./cancel-flex.component.css']
})
export class CancelFlexComponent implements OnInit {
  
  show: boolean = false;
  select: boolean = false;
  hovered: boolean = false;
  clearHover: boolean = false;

  constructor() { }

  displayToggle():void{
    this.show = !this.show;
  }

  checkToggle():void{
    this.select = !this.select;
      if(this.select){
        document.getElementById("tdrindiv").classList.add("activeCheck0");
      }
      if(!this.select){
        document.getElementById("tdrindiv").classList.remove("activeCheck0");
      }
  }
  colorSelectFx():String{
    if(this.select){
      return 'rgb(0, 0, 0)'
    } if (this.hovered&&!this.select){
      return 'rgb(113, 113, 113)'
    } else {
      return ''
    }
  }
  colorSelectFx2():String{
    if (this.clearHover&&this.select){
      return 'rgb(247, 247, 247)'
    } else {
      return ''
    }
  }


  
  ngOnInit(): void {
  }

}
