import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HEROS } from './mock-heros';
import { Hero } from './hero';
import { MessageService } from './message.service';


@Injectable()
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeros(): Observable<Hero[]> {
    this.messageService.add("Find all Heros");
    return of(HEROS);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.add(`Find Hero with ${id}`);
    return of(HEROS.find(hero => hero.id === id));
  }

}