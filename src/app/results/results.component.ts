import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hideMap(){
    document.getElementById("scroll-section").style.width = '100vw';
    document.getElementById("scroll-section").style.zIndex = "2";
    document.getElementById("map-section").style.visibility = "hidden";
  }

}
