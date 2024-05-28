import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const api_url = "https://randomuser.me/api/?results=10";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<any>(api_url);
  }

}
