import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';

@Injectable()
export class MessageService {
  messages: string[] = [];
  constructor() { }

  add(message: string){
    this.messages.push(message);
  }

  getAll(): Observable<String[]> {
return of(this.messages);
  }

}