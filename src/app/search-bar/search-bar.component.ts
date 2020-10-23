import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  expand:boolean = false;

  showTop:boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

}
