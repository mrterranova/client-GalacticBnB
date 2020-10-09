import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-hostsuperhostexplaination',
  templateUrl: './hostsuperhostexplaination.component.html',
  styleUrls: ['./hostsuperhostexplaination.component.css']
})
export class HostsuperhostexplainationComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  @Input('mptsdata') mptsdata: Data; // tslint:disable-line: no-input-rename
  constructor() { }

  ngOnInit(): void {
  }

}
