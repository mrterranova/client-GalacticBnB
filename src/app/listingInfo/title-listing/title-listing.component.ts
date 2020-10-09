import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'

@Component({
  selector: 'app-title-listing',
  templateUrl: './title-listing.component.html',
  styleUrls: ['./title-listing.component.css']
})

export class TitleListingComponent implements OnInit {
  //global variables
  private location; 

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id)
  }

  getLoc(id: number){
    this.tlService.getLoc(id).subscribe(data => this.location = data);
  }

}
