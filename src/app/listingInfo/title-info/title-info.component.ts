import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'


@Component({
  selector: 'app-title-info',
  templateUrl: './title-info.component.html',
  styleUrls: ['./title-info.component.css']
})
export class TitleInfoComponent implements OnInit {

  //global variables
  public location; 
  public reviews;
  public revCount = 0;
  public title;
  public rating;
  public superhost;
  public city;
  public state;
  public country;

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id);
    this.getReviews();
  }

  getLoc(id: number){
    this.tlService.getLoc(id).subscribe(data => {this.location = data; 
      this.title = this.location.title;
      this.rating = this.location.rating;
      this.superhost = this.location.superhost;
      this.city = this.location.city;
      this.state = this.location.state_territory;
      this.country = this.location.country;
    });
  }

  getReviews(){
    this.tlService.getReviews().subscribe(
      data => {
        this.reviews = data;
        this.revlogic(data);
    });
  }

  revlogic(revs){
    revs.map( rev => {
      if(rev.locationReviewed == this.location.id){
        this.revCount++;
      }
    })
  }

}
