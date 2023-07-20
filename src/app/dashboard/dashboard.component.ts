import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { donutChartOptions } from './donutChartOptions';
import * as Highcharts from 'angular-highcharts';
import { Chart} from 'angular-highcharts';

import { UserService } from '../user.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  respectValue: number=0;
  precautionValue:number=0;
  AccidentRate: number=0;
  materiaux: number=0;
  formData: any;
  barData=[
    {"name":"Respect du protocole",
   "value": this.respectValue},
    {"name":"Taux de précaution",
    "value": this.precautionValue} ,
    {"name":"Taux d'accidents par moins",
    "value": this.AccidentRate}
    ,{"name":"materiaux bon sùres durant le moins dernier",
    "value": this.materiaux},
   ]
  question9Value: string='';
  question10Value: string='';
  constructor(private route: ActivatedRoute,private userService: UserService){
    Object.assign(this,this.barData)
  }
  loggedInUsername: string = '';
  loggedUrl: string='';
  loggedInRole: string = '';
  loggedInUser: any;
  chantierId: string='';
  donutChartOptions: any = donutChartOptions;
  progress : number=0;
 left: number=0;



 
  
  ngOnInit(): void {

    
   
    this.updateLoggedInUser();
    this.chantierId = this.route.snapshot.params['id'];
    const formDataArray = JSON.parse(localStorage.getItem('formDataArray') || '[]');

  const item = formDataArray.find((item: { id: string; }) => item.id === this.chantierId);

  console.log(item);
  this.formData = item;
  this.updateDonutChartOptions();
  this.question9Value = item.question9;
  this.question10Value = item.question10;
  this.progress=+item.question11
  this.left=+item.question10-this.progress;

  this.userService.left = +this.formData.question10 - this.progress;
  this.userService.progress = this.progress;
  this.respectValue=(+this.formData.question9-((+this.formData.question9-+this.formData.question3)+(+this.formData.question9-+this.formData.question4)+(+this.formData.question9-+this.formData.question5)+(+this.formData.question9-+this.formData.question6)+(+this.formData.question9-+this.formData.question7)+(+this.formData.question9-+this.formData.question8)))/+this.formData.question9
  this.precautionValue=+this.formData.question2/6
  this.AccidentRate=+this.formData.question1/30
  this.materiaux=+this.formData.question13/+this.formData.question12

console.log(this.respectValue,this.precautionValue, this.AccidentRate)
  
    this.barData=[
  {"name":"Respect du protocole",
 "value": this.respectValue},
  {"name":"Taux de précaution",
  "value": this.precautionValue} ,
  {"name":"Taux d'accidents par moins",
  "value": this.AccidentRate},
  {"name":"materiaux bon sùres durant le moins dernier",
  "value": this.materiaux}
 ]
  }
  private updateDonutChartOptions() {
    // Update the donutChartOptions data using the formData
    
    this.donutChartOptions.series[0].data = [
      { name: 'Les casques de sécurité anti-heurt ou de protection du visage ', y: +this.formData.question3, color: '#eeeeee' },
      { name: ' Les bouchons des oreilles', y: +this.formData.question4, color: '#7CBDB9' },
      { name: 'Les casques anti-bruits', y: +this.formData.question5, color: '#8071c9' },
      { name: 'Les masques de protection anti-poussière, à ventilation ou avec filtre', y: +this.formData.question6, color: '#DDEEEE' },
      { name: 'Les gants', y: +this.formData.question7, color: '#EDDEF0' },
      { name: 'Les EPI de protection contre les chutes de hauteur', y: +this.formData.question8, color: '#EDAEF2' },
    ];
 

    // Create the donut chart instance
    
  }
  
  private updateLoggedInUser() {
    const loggedInUser = localStorage.getItem('loggedInUser'); //used to retrieve the data from the web browser's storage
    if (loggedInUser) {
      const parsedUser = JSON.parse(loggedInUser); //parse the string back to a user object
      this.loggedInUsername = parsedUser.username;
    this.loggedInRole = parsedUser.role;
    this.loggedUrl = parsedUser.url;
    console.log(loggedInUser);

    





    
   
    }
  }

  

  donutChart= new Chart(donutChartOptions);
  

  




  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');

    if (sidebar) {
      sidebar.classList.toggle('active');

    }
  }

}
