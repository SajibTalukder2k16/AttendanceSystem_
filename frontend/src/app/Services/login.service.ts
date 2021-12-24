import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Employee, LogInData} from "../models/employee.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  Id='';
  Data?:string;
  response?:string;
  constructor(private http:HttpClient) { }
  logInEmployee(data:LogInData)
  {
    this.http.get<any>(environment.API_LogIn,{headers:new HttpHeaders({
        'EmployeeId':data.EmployeeId,
        'PIN':data.PIN
      })}).subscribe(res=>{
        console.log("!",res);
      this.response = res;
      console.log("?",this.response);
    })
  }
}
