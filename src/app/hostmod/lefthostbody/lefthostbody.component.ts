import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-lefthostbody',
  templateUrl: './lefthostbody.component.html',
  styleUrls: ['./lefthostbody.component.css']
})
export class LefthostbodyComponent implements OnInit {
  @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
  @Input('mptsdata') mptsdata: Data; // tslint:disable-line: no-input-rename
  constructor() { }

  ngOnInit(): void {
  }

}
