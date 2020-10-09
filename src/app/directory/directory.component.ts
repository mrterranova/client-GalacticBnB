import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
})
export class DirectoryComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
  // this.hideTheText();
  }
  // hideTheText() {
  //   const words = document.getElementsByClassName(
  //     'hideMeText'
  //   ) as HTMLCollectionOf<HTMLElement>;

  //   words[0].style.display = 'none';
  //   words[1].style.display = 'none';
  // }
}

// hideMeText thought it would work but it can't grab the element from another component
