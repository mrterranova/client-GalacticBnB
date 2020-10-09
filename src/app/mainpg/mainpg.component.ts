import { Component, OnInit } from '@angular/core';
import { MptsServiceService } from '../mpts/mpts-service/mpts-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mainpg',
  templateUrl: './mainpg.component.html',
  styleUrls: ['./mainpg.component.css'],
})
export class MainpgComponent implements OnInit {
  constructor(
    private mptsServiceService: MptsServiceService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getImages();
    this.getLocations();
  }

  public images;
  public photos;

  getImages() {
    this.mptsServiceService.getImgs().subscribe(
      (data) => {
        this.images = data;
        let urls = [];
        for (let i = 0; i < this.images.length; i++) {
          urls.push(this.images[i].pic1url);
        }
        this.photos = urls;
        console.log(this.photos);
      },
      (err) => {
        console.log('image Err');
      }
    );
  }

  public locates;
  public locations;

  getLocations() {
    this.mptsServiceService.getLocates().subscribe(
      (data) => {
        this.locates = data;
        let urls = [];
        for (let i = 0; i < this.locates.length; i++) {
          urls.push(this.locates[i]);
        }
        this.locations = urls;
        console.log(this.locations);
      },
      (err) => {
        console.log('image Err');
      }
    );
  }
}
