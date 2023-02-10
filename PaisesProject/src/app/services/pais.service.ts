import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private myApiUrl: string = "https://restcountries.com/v2";

  /* get httpParams(){

    return new this.httpParams().set()

  } */

  constructor() { }
}
