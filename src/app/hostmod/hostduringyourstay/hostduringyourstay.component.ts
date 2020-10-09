import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hostduringyourstay',
  templateUrl: './hostduringyourstay.component.html',
  styleUrls: ['./hostduringyourstay.component.css']
})
export class HostduringyourstayComponent implements OnInit {
  @Input('hostdata') hostData: string; // tslint:disable-line: no-input-rename
  @Input('mptsdata') mptsdata: string; // tslint:disable-line: no-input-rename
  show: boolean = true;
  stringShortLength: number = 260;
  constructor() { }
  stringShortener(longString:string, length:number): string{
    let finalBio:string ="bio"
    if(longString.length>length){
      finalBio = longString.slice(0,length)+"...."
    } else {
      finalBio = longString
    }
    return finalBio
  }

  ngOnInit(): void {
  }

}
