import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-hostheader',
  templateUrl: './hostheader.component.html',
  styleUrls: ['./hostheader.component.css']
})
export class HostheaderComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  @Input('mptsdata') mptsdata: Data; // tslint:disable-line: no-input-rename

  julianParseFunction(excelDate:number): string {
    //array of months to return month
    var months:string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    //converts database date to epoch time Jan. 1, 1970
    let toEpoch: number = (excelDate-25568)*86400*1000;
    //converts toEpoch:number to a date.
    let newDate = new Date(toEpoch)
    //return specific month from months array by using getMonth method on newDate var
    let month = months[newDate.getMonth()]
    //return year from newDate
    let year = newDate.getFullYear()
    //returns what the month year in a string
    let sentence:string = month+" "+year
    return sentence
  }

  constructor() { 
  }

  ngOnInit(): void {
  }

}
