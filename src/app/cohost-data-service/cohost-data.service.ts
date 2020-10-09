
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment'


@Injectable()
export class CohostDataService {
  constructor (
    private http: HttpClient
  ) {}

  getCohostData(id : number) {
    return this.http.get(environment.apiUrl+`/api/v1/cohostdata/`+ id);
  }

}
