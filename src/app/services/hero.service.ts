import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private httpClient: HttpClient) { }

  getHeroes(){
    return this.httpClient.get<any>('api/hero');
  }
}
