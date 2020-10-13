import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-covid',
  templateUrl: './covid.component.html',
  styleUrls: ['./covid.component.css']
})
export class CovidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  coronaInfo (){
    const ronaModal = document.getElementById('coronaModal');
    ronaModal.style.display = 'block';
  }

}
