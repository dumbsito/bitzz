import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { GitService } from 'src/app/services/git.service';
import queryString from 'query-string';

import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
user:string="dumbsito"
datos:any;
  

constructor(private gitService:GitService,private router:Router){
     console.log(this.router.url)
}
  ngOnInit(): void {
    this.gitService.getData(this.user).subscribe(data=>this.datos=data)

   
  if(window.location.href.includes("?code=")){
    console.log("sadasd");
  }
  
    }    
    
params:any = queryString.stringify({
  client_id:"a727daaaf35737b322cb",
  redirect_uri: 'http://localhost:4200/dashboard',
  scope: ['read:user', 'user:email'].join(' '), // space seperated string
  allow_signup: true,
});

gitUrl2:string = `https://github.com/login/oauth/authorize?${this.params}`;

 // https://github.com/login/oauth/authorize?client_id=a727daaaf35737b322cb?redirect_uri=http://localhost:4200/repositorios
 // https://github.com/login/oauth/authorize?allow_signup=true&client_id=a727daaaf35737b322cb&redirect_uri=http%3A%2F%2Flocalhost%3A4200%2Frepositorios&scope=read%3Auser%20user%3Aemail



log(){
  this.gitService.authorize().subscribe(data=>console.log(data)
   
  )

  

}







}

