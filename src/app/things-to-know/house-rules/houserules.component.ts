import { Component, OnInit, Input } from '@angular/core';
import { Data } from '@angular/router';

@Component({
  selector: 'app-houserules', 
  templateUrl: './houserules.component.html',
  styleUrls: ['./houserules.component.css']
})
export class HouseRulesComponent implements OnInit {
  @Input('ttkdata') ttkData: Data;

  ngOnInit(): void {
  }

}