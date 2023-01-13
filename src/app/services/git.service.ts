import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Octokit } from '@octokit/rest';



@Injectable({
  providedIn: 'root'
})

export class GitService {


  constructor(private http:HttpClient) { 

  }

authorize(){

  return this.http.get(`https://github.com/login/oauth/authorize?client_id=37f2a8358ed451f294626c6835982ce35a39dfce`)

}

  getData(user:string){
  
    
    return this.http.get(`https:api.github.com/users/${user}/repos`)

  }
}
