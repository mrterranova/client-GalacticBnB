import { Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-result-other-places',
  templateUrl:'./result-other-places.component.html',
  styleUrls: ['./result-other-places.component.css']
})
export class ResultOtherPlacesComponent implements OnInit {

  @Output() public afterClick : EventEmitter<string> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  OtherDestLeftBtn(){
    document.getElementById("opd-container").scrollLeft -= 312;
    document.getElementById("opd-right").style.opacity = '1';
    if(document.getElementById("opd-container").scrollLeft<10){
      document.getElementById("opd-left").style.opacity = '0.3';
    } else {
      document.getElementById("opd-left").style.opacity = '1';
    }
  }

  OtherDestRightBtn(){
    document.getElementById("opd-container").scrollLeft += 312;
    document.getElementById("opd-left").style.opacity = '1';
    if(document.getElementById("opd-container").scrollLeft>1300){
      document.getElementById("opd-right").style.opacity = '.3';
    } else {
      document.getElementById("opd-right").style.opacity = '1';
    }
  }

  getStateResults(stateResults) : void {
    // alert(stateResults)
    this.afterClick.emit(stateResults)
  }

}
