import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartModule } from 'angular-highcharts';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { NgxChartsModule } from '@swimlane/ngx-charts';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FormComponent,
    SuccessComponent,
    DashboardComponent,
    
  ],
   
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule ,
    ChartModule ,
    HttpClientModule,
    BrowserAnimationsModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
