import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import dataBase from 'C:/Users/douaa/prj/src/assets/dataBase.json';
import { Chantier } from './chantier';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private loggedInUser: User = new User;
  public left: number = 0;
  public progress: number = 0;



  private chantiers: Chantier[]=dataBase.chantiers;
   
  constructor(private http: HttpClient) {

    
  }
  


  getChantierByRole(username:string):  Chantier[]{ 
    if (this.loggedInUser.role==="chef"){
      return this.chantiers.filter(chantier=> chantier.chef===username);
    }
    
    else{
      return this.chantiers.filter(chantier=> chantier.controlleur===username);

    }//return "les chantiers" That has string as the name of the chef/controlleur
    
  }
  

  getLoggedInUser(): User {

    return this.loggedInUser;
  }

  setLoggedInUser(user: User): void{

    this.loggedInUser=user;
  }
}
