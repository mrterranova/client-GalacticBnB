import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TitlelistingService } from '../titlelisting-services/titlelisting.service'


@Component({
  selector: 'app-stay-descriptor',
  templateUrl: './stay-descriptor.component.html',
  styleUrls: ['./stay-descriptor.component.css']
})
export class StayDescriptorComponent implements OnInit {

  constructor(private tlService: TitlelistingService, private route: ActivatedRoute) { }
  public location;
  public host;
  public title;
  public hostname;
  public guests;
  public beds;
  public bathrooms;
  public bedrooms;
  public hostimageurl;

  ngOnInit(): void {
    this.getLoc(this.route.snapshot.params.id);
    this.getHost(this.route.snapshot.params.id);
  }

  getLoc(id: number){
    this.tlService.getLoc(id).subscribe(data => {
      this.location = data;
      this.title = this.location.title;
      this.beds = this.location.beds;
      this.hostname = this.location.host;
      this.guests = this.location.guests;
      this.bedrooms = this.location.bedrooms;
      this.bathrooms = this.location.bathrooms;
    });
  }

  getHost(id: number){
    this.tlService.getHost(id).subscribe(data => {
      this.host = data;
      this.hostimageurl = this.host.hostimageurl;
    })
  }
}
