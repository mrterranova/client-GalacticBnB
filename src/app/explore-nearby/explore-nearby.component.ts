import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore-nearby',
  templateUrl: './explore-nearby.component.html',
  styleUrls: ['./explore-nearby.component.css'],
})
export class ExploreNearbyComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  showLocation() {
    console.log('clicked location');
    const x = document.getElementById('demo');
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      x.style.display='block'
      x.innerHTML = 'Geolocation is not supported by this browser.';
    }
  }

  showPosition(position) {
    const x = document.getElementById('demo');
    x.style.display='block'
    x.innerHTML =
      'Latitude: ' +
      position.coords.latitude +
      '<br>Longitude: ' +
      position.coords.longitude;
  }
}
