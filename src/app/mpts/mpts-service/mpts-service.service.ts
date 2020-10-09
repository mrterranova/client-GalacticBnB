import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'
import { environment } from '../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class MptsServiceService {
  Location = {}

  constructor(private http: HttpClient) { 

  }

  //location table
  getLocates() {
    return this.http.get(environment.apiUrl+'/api/v1/mpts');
  }

  //individual locations - using this service for footer component
  getLocate(id : number){
    return this.http.get(environment.apiUrl+ `/api/v1/mpts/` + id)
  }

  //images table
  getImgs() {
    return this.http.get(environment.apiUrl+'/api/v1/photos');
  }

  //review table
  getReviews() {
    return this.http.get(environment.apiUrl+'/api/v1/reviews/');
  }

  updateLocate(newspeaker, id: number) {
    let body = JSON.stringify(newspeaker)
    console.log("You are updating!")
    return this.http.put(environment.apiUrl+'/api/v1/mpts/'+id, body, httpOptions)
  }
  
}
