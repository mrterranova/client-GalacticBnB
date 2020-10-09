import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
import { ActivatedRoute } from '@angular/router';
import { AddressesService } from '../../services/addresses.service';

//so as you can see from above, google maps is it's own module now for angular
// you also must include this in the imports in app.module

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  //these allow the person to click on the markers in the google maps window
  //and recieve a pop-up box of information for that location
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap;
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow;

  //creating the service to access the api routes
  constructor(
    private addressesService: AddressesService,
    private route: ActivatedRoute
  ) {}

  // if you look at the html for this component then you will see these first
  // 3 variables. They are necessary for the function of this app to work
  // they set the initial zoom, center of the map, and other options like
  // the appearance of the map and the min and max zoom
  // I just picked number that I thought looked similar to AirBnB
  zoom = 12;
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    zoomControl: false,
    scrollwheel: false,
    disableDoubleClickZoom: true,
    maxZoom: 15,
    minZoom: 8,
  };

  // these variables allow you to create an array of markers to place on
  // map initially and allow for the content window information to appear
  markers = [];
  infoContent = '';

  //taking the page param from the component and setting that to equal the
  //page variable and creating an object for our json data
  page = 1;
  public location;

  ngOnInit() {
    //getting the address of the location based on the params page number
    //from above
    this.route.paramMap.subscribe((params) => {
      this.page = +params.get('id');
    });

    //API request
    this.addressesService.getAddressById(this.page).subscribe(
      (data) => {
        //taking the json object and setting it equal to the location variable
        this.location = data;

        //setting the initial center to the lat and lon from the API request
        this.center = {
          lat: this.location.lat,
          lng: this.location.lon,
        };

        //setting the location position marker based on the lat and lon from
        //API request
        this.setMarker(this.location.lat, this.location.lon);
      },
      (err) => console.log(err)
    );
  }

  //allows the zoom in button to work
  zoomIn() {
    if (this.zoom < this.options.maxZoom) this.zoom++;
  }

  //allows the zoom out button to work
  zoomOut() {
    if (this.zoom > this.options.minZoom) this.zoom--;
  }

  //added for future usability but doesn't do anything for now
  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  //logs the center of the map to the console,  not in use
  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }

  //takes the longitude and latitude passed in and sets a marker at that
  //location. Adds other marker info like color and title for the content
  //window if you want to add one
  setMarker(lati: number, loni: number) {
    this.markers.push({
      position: {
        lat: lati,
        lng: loni,
      },
      label: {
        color: 'red',
        text: '' + (this.markers.length + 1),
      },
      title: '' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
    });
  }

  //opens the info window when clicked
  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }
}
