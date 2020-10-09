import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};

@Injectable({
  providedIn: 'root',
})
export class ReviewsService {
  serverConnection: string = environment.apiUrl+`/api/v1/reviews/`;
  constructor(private http: HttpClient) {}

  getReviews() {
    return this.http.get(`${this.serverConnection}`);
  }

  getReviewsById(id: number) {
    return this.http.get(`${this.serverConnection}${id}`);
  }

  getReviewsByLocation(locId: number) {
    return this.http.get(`${this.serverConnection}location/${locId}`);
  }
}
