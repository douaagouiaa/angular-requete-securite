import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import dataBase from 'C:/Users/douaa/prj/src/assets/dataBase.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedInUsername: string = '';
  loggedUrl: string='';
  loggedInRole: string = '';
  loggedInUser: any;
  chantiers: any[]=[];
  searchQuery: string = '';
filteredChantiers: any[] = [];

  constructor(private userService: UserService,private router: Router) {
    

  }

  ngOnInit() {
  
    this.updateLoggedInUser();
    console.log(this.loggedInRole)
  }

  private updateLoggedInUser() {
    const loggedInUser = localStorage.getItem('loggedInUser'); //used to retrieve the data from the web browser's storage
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser); //parse the string back to a user object
      this.loggedInUsername = parsedUser.username;
    this.loggedInRole = parsedUser.role;
    this.loggedUrl = parsedUser.url;
    this.chantiers = this.userService.getChantierByRole(this.loggedInUsername);
    }
  }

  redirectToRoute(chantierId: string) {
    this.router.navigate(['/form', chantierId]);
  }
  redirectToRouteDashboard(chantierId: string) {
    this.router.navigate(['/dashboard', chantierId]);
  }

  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');

    }
  }
  filterChantiers() {
    if (this.searchQuery.trim() === '') {
      this.filteredChantiers = this.chantiers;
    } else {
      this.filteredChantiers = this.chantiers.filter(chantier =>
        chantier.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }
  
}







