import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hostbio',
  templateUrl: './hostbio.component.html',
  styleUrls: ['./hostbio.component.css']
})
export class HostbioComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  show: boolean = true;
  stringShortLength: number = 160;
  constructor() { }
  stringShortener(longString:string, length:number): string{
    let finalBio:string ="bio"
    if(longString.length>length ){
      finalBio = longString.slice(0,length)+"...."
    } else {
      finalBio = longString
    }
    return finalBio
  }
  ngOnInit(): void {
  }

}
