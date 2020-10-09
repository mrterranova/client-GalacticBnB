import { Component, Input, OnInit } from '@angular/core';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sleeping-arrangements-info',
  templateUrl: './sleeping-arrangements-info.component.html',
  styleUrls: ['./sleeping-arrangements-info.component.css']
})
export class SleepingArrangementsInfoComponent implements OnInit {
  //global variables
  public location; 
  public sleep;
  public sleeparr=[];
  public bedcounter;


  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id);
  }

  getLoc(id: number){
    this.tlService.getLoc(id).subscribe(data => {this.location = data; this.getSleep();});
    
  }

  getSleep(){
    this.tlService.getSleep().subscribe(data => {
      this.sleep = data;
      this.pushSleep(data)
    })
  }

  pushSleep( arrangements ){
    arrangements.map( arrange => {
      if (arrange.location == this.location.id){
        this.sleeparr.push(arrange)
        this.bedcounter = this.sleeparr[0].bedcount;
      }
    })
  }

}
