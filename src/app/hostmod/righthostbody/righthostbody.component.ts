import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-righthostbody',
  templateUrl: './righthostbody.component.html',
  styleUrls: ['./righthostbody.component.css']
})
export class RighthostbodyComponent implements OnInit {
   @Input('hostdata') hostData: Data; // tslint:disable-line: no-input-rename
   @Input('mptsdata') mptsdata: Data; // tslint:disable-line: no-input-rename
  constructor() { }

  ngOnInit(): void {
  }

}
