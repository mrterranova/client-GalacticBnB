import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressesService } from '../../services/addresses.service';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  // created the page number for the params and the location
  //from the address api call to get the city
  page = 1;
  public location;
  city: String = '';

  // created the second location to hold the information from the
  //description API call
  public locationTwo;
  description: String = '';

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

        // creating the formatted address string for display in the html
        this.city =
          this.location.city +
          ', ' +
          this.location.state_territory +
          ', ' +
          this.location.country;
      },
      (err) => console.log(err)
    );

    //using the description API call to get the description also based on the
    //page number from above
    this.addressesService.getDescriptionById(this.page).subscribe(
      (data) => {
        //setting the new json data equal to a new variable
        this.locationTwo = data;

        //setting the description value for display in the html
        this.description = this.locationTwo.description;
      },
      (err) => console.log(err)
    );
  }
}
