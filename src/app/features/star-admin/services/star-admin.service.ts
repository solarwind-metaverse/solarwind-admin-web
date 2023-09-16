import { Injectable } from '@angular/core';
import { Star } from '../models/star';

@Injectable({
  providedIn: 'root'
})
export class StarAdminService {

  url = 'http://localhost:8081/api/stars'

  constructor() { }

  async getAllStars(): Promise<Star[]> {
    
    const data = await fetch(this.url);
    const response =  await data.json();

    return response ?? [];

  }

  async getStarById(id: string): Promise<Star | undefined> {

    const data = await fetch(this.url + '/' + id);
    const response =  await data.json();
    return response;
  }
  
}
