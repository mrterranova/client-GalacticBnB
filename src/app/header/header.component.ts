import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {

  scrollTop:number = 0;
  search:boolean = false;
  exp:boolean = false;


  constructor() {
  }

  ngOnInit(): void {
    window.addEventListener(
      'scroll',
      () => {
        this.scrollTop = window.pageYOffset;
      },
      true
    );
  }

}
