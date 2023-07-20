import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { SuccessComponent } from './success/success.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {path:"", component:LoginComponent} ,{path:"home", component:HomeComponent} , {path:"form/:id", component:FormComponent},{path:"success", component:SuccessComponent}
 , {path:"dashboard/:id", component:DashboardComponent} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
