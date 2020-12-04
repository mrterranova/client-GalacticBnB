import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})

export class SharedDataService {

  private message = new BehaviorSubject('default');
  currentMessage = this. message.asObservable();

  constructor(){

  }

  updateMessage(message: string) {
    this.message.next(message)
    console.log(message)
    debugger

  }
}
