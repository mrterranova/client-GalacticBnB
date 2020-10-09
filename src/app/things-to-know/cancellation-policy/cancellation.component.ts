import { Component, OnInit, Input } from '@angular/core';
import { Data, ActivatedRoute } from '@angular/router';
import { TtkDataService } from '../ttk-data-service/ttk-data.service';

@Component({
  selector: 'app-cancellation',
  templateUrl: './cancellation.component.html',
  styleUrls: ['./cancellation.component.css']
})
export class CancellationComponent implements OnInit {
  @Input('ttkdata') ttkData: Data;
  
  constructor(private route: ActivatedRoute, private ttkdata : TtkDataService) {}

  public location;

  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id);
  }

  checkinDate() {
    window.location.href="rooms/"+ this.location.id+"#calendar";
  }

  getLoc(id: number){
    this.ttkdata.getLoc(id).subscribe(data => {this.location = data});
  }

}