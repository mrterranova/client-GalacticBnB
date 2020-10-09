import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root',
})
export class AddressesService {
  key = 'xxx';

  constructor(private http: HttpClient) {}

  getAddresses() {
    return this.http.get(environment.apiUrl+'/api/v1/map');
  }

  getAddressById(id: number) {
    return this.http.get(environment.apiUrl+`/api/v1/map/` + id);
  }

  getDescriptionById(id: number) {
    return this.http.get(environment.apiUrl+`/api/v1/mpts/` + id);
  }

  getPointsOfInterest(lat: number, lon: number) {
    return this.http.get(
      `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${this.key}&radius=15000&type=tourist_attraction&location=${lat},${lon}`
    );
  }
}
