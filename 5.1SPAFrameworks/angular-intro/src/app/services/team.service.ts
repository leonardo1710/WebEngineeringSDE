import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Response } from './Response';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  private REST_API_SERVER = "http://localhost:3001/";

  constructor(private httpClient: HttpClient) { }

  public getAllTeams(){
    return this.httpClient.get<Response>(`${this.REST_API_SERVER}team/getAll`);
  }
}
