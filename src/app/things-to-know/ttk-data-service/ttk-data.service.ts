import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable()
export class TtkDataService {
  constructor (
    private http: HttpClient
  ) {}

  getTtkData() {
    return this.http.get(environment.apiUrl+`/ttk/1`);
  }

  getLoc(id:number) {
    return this.http.get(environment.apiUrl+`/api/v1/mpts/` + id)
  }

}
