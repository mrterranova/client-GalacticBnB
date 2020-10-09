import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';


@Component({
  selector: 'app-healthsafety',
  templateUrl: './health&safety.component.html',
  styleUrls: ['./health&safety.component.css']
})
export class HealthSafetyComponent implements OnInit {
  @Input('ttkdata') ttkData: Data;

  constructor() { }

  ngOnInit(): void {
  }

}