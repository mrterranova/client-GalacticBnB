import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment'

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable({
  providedIn: 'root'
})
export class TitlelistingService {

  constructor(private http: HttpClient) { }


    //location table
    getLocs() {
      return this.http.get(environment.apiUrl+'/api/v1/mpts');
    }
  
    //individual locations 
    getLoc(id : number){
      return this.http.get(environment.apiUrl+`/api/v1/mpts/` + id);
    }

    getSleep(){
      return this.http.get(environment.apiUrl+'/api/v1/sleepingarrs/');
    }

   getReviews(){
     return this.http.get(environment.apiUrl+'/api/v1/reviews/');
   }
   
   getHost(id: number){
     return this.http.get(environment.apiUrl+'/api/v1/hostdata/' + id);
   }

   getMessage(id: number){
     return this.http.get(environment.apiUrl+'/api/v1/hostmessage' + id)
   }

   getHostMessage(id: number){
     return this.http.get(environment.apiUrl+'/api/v1/hostmessage/' + id )
   }

   getAmeni(id: number){
     return this.http.get(environment.apiUrl+'/api/v1/amenities/'+id)
   }
}
