import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { ListingInfoService } from './../../services/listingInfo.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-listing-info-container',
  templateUrl: './listing-info-container.component.html',
  styleUrls: ['./listing-info-container.component.css']
})
export class ListingInfoContainerComponent implements OnInit {

  constructor(private listingInfoService: ListingInfoService, private route: ActivatedRoute) { }
  listingData: Data = {};
  amenitiesData: Data = {};
  sleepingArrData: Data = {};

  loadListingData(id:number) {
    this.listingInfoService.getListingInfoById(id).subscribe(data => this.listingData = data);
  }

  loadAmenitiesData(id:number) {
    this.listingInfoService.getListingInfoById(id).subscribe(data => this.amenitiesData = data);
  }

  loadSleepingArrData(id:number) {
    this.listingInfoService.getSleepingArrById(id).subscribe(data => this.sleepingArrData = data);
  }

  ngOnInit(): void {
    this.loadListingData(this.route.snapshot.params.id);
    this.loadAmenitiesData(this.route.snapshot.params.id);
    this.loadSleepingArrData(this.route.snapshot.params.id);
  }

}
