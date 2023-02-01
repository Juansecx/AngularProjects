import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posts } from '../interfaces/posts';
@Injectable({
  providedIn: 'root',
})
export class PostService {

  constructor(private http: HttpClient) {}

  getQuery(query: string) {

    const url = `https://jsonplaceholder.typicode.com/${query}`;
    return this.http.get<Posts[]>(url);
  }
}
