import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hosticons',
  templateUrl: './hosticons.component.html',
  styleUrls: ['./hosticons.component.css'],
  template: `
    <img src="../imageshost/star.png">
  `
})
export class HosticonsComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  @Input('mptsdata') mptsdata: Data; // tslint:disable-line: no-input-rename
  constructor() { }

  ngOnInit(): void {
  }

}
