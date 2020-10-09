import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hostlanguageandresponserate',
  templateUrl: './hostlanguageandresponserate.component.html',
  styleUrls: ['./hostlanguageandresponserate.component.css']
})
export class HostlanguageandresponserateComponent implements OnInit {

  constructor() { }
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  ngOnInit(): void {
  }
  
}
