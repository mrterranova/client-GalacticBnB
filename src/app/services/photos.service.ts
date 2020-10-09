import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PhotosService {
  constructor(private http: HttpClient) {}

  getPhotos() {
    return this.http.get(environment.apiUrl+'/api/v1/photos/');
  }

  getPictureById(id: number) {
    return this.http.get(environment.apiUrl+`/api/v1/photos/` + id);
  }

  getTTds() {
    return this.http.get(environment.apiUrl+`/api/v1/ttd`);
  }

  getLocationByID(id:number){
    return this.http.get(environment.apiUrl+`/api/v1/mpts/`+id);
  }
}
