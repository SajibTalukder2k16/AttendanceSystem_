import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegistrationComponent} from "./registration/registration.component";
import {EmployeeHomePageComponent} from "./employee-home-page/employee-home-page.component";
import {AdminHomePageComponent} from "./admin-home-page/admin-home-page.component";
import {HomeComponent} from "./home/home.component"
import {AllEmployeeComponent} from "./all-employee/all-employee.component";
import {EmployeeDetailsComponent} from "./employee-details/employee-details.component";

const routes: Routes = [
  {path:'login',component:LoginComponent,pathMatch:'full'},
  {path:'register',component:RegistrationComponent,pathMatch:'full'},
  {path:'home',component:EmployeeHomePageComponent,pathMatch:'full'},
  {path:'adminHome',component:AdminHomePageComponent,pathMatch:'full'},
  {path:"Employees/Employee/:id",component:EmployeeDetailsComponent,pathMatch:'full'},
  {path:'Employees',component:AllEmployeeComponent,pathMatch:'full'},
  {path:'',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
