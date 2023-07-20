import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { UserService } from '../user.service';
import dataBase from 'C:/Users/douaa/prj/src/assets/dataBase.json';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  userService: UserService;
  


  constructor(private router: Router, userService: UserService){
    this.userService=userService;
  }
  password: string='';
  mail: string='';
  role: string='';

  login(mail: string, password: string) {
    const user = dataBase.employees.find((u: { mail: string, password: string }) => u.mail === mail && u.password === password);
    if(user){const role= user.role;
    if (user) {
      // Successful login
      this.router.navigate(['/home']);
      this.userService.setLoggedInUser(user);
      localStorage.setItem('loggedInUser', JSON.stringify(user));
    }
    else{
      console.log('mot de passe ou/et email non valide(s)')
    }
    
  }}

   
  ngOnInit(): void{}
  onSubmit(){

  }
  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');

    }
  }


}
