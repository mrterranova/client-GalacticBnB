import { Component, OnInit } from '@angular/core';
import { TtkDataService } from '../ttk-data-service/ttk-data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-ttkcontainer',
  templateUrl: './ttkcontainer.component.html',
  styleUrls: ['./ttkcontainer.component.css']
})
export class TtkContainerComponent implements OnInit {
  constructor(private ttkDataService: TtkDataService) {}
  ttkdata: Data = {};
  loadTtkData(){
    this.ttkDataService.getTtkData().subscribe(data => this.ttkdata = data);
    () => console.log("loadeddd")
  }



  ngOnInit() {
    this.loadTtkData();
  }

}