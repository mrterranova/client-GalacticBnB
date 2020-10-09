import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from '../../environments/environment'

@Injectable()
export class HostDataService {
  constructor (
    private http: HttpClient
  ) {}

  getMptsData(id : number) {
    return this.http.get(environment.apiUrl+`/api/v1/mpts/`+ id)
  }
  getHostData(id : number){
    return this.http.get(environment.apiUrl+`/api/v1/hostdata/` + id)
  }
}
