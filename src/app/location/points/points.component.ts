import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressesService } from '../../services/addresses.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css'],
})
export class PointsComponent implements OnInit {
  // created the page number for the params and the location
  //from the address api call to get the city
  page = 1;
  public location;

  //creates a points of location object for the API request
  public points;

  //array of names and icons of points of interest to display in the html
  names = [];
  icons = [];

  constructor(
    //creating the service to access the api routes
    private addressesService: AddressesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    //taking the page param from the component and setting that to equal the
    //page variable
    this.route.paramMap.subscribe((params) => {
      this.page = +params.get('id');
    });

    //getting the address of the location based on the params page number
    //from above
    this.addressesService.getAddressById(this.page).subscribe(
      (data) => {
        //taking the json object and setting it equal to the location variable
        this.location = data;

        //using the addresses API call to get the lat and lon also based on the
        //page number from above
        this.addressesService
          .getPointsOfInterest(this.location.lat, this.location.lon)
          .subscribe(
            (data) => {
              //taking the json object and setting it equal to the points variable
              this.points = data;

              // pushing the first 7 closest points of interest to an array for
              //html display
              for (var i = 0; i < 7; i++) {
                this.names.push(this.points.results[i].name);
              }

              // pushing the first 7 closest points of interest icons to an array
              //for html display
              for (var i = 0; i < 7; i++) {
                this.icons.push(this.points.results[i].icon);
              }
            },
            (err) => console.log(err)
          );
      },
      (err) => console.log(err)
    );
  }
}
