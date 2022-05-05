import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Userdetails } from '../models/userdetails.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL="http://localhost:5000/api/Users";
  constructor(private _httpClient:HttpClient) { }

  getUsers(){
    console.log("Test")
    return this._httpClient.get(this.baseURL);
  }

  getUserById(id:Number){
    return this._httpClient.get(this.baseURL+id);
  }

  addUser(user:Userdetails){
    return this._httpClient.post(this.baseURL,user);
  }
}
