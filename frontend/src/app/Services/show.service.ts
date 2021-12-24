import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LogInData} from "../models/employee.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  Data:any;
  response?:String;
  AttendanceResponse?:String;
  constructor(private http:HttpClient) { }
  getData()
  {
    this.http.get<any>(environment.API_Employee).subscribe(data=>{
      this.Data = data;
      console.log(data);
    })
  }
  getDataById(id:string)
  {
    this.http.get<any>(environment.API_GetEmp,{headers:new HttpHeaders({
        'EmployeeId':id
      })}).subscribe(res=>{
      console.log("!",res);
      this.response = res;
      console.log("?",this.response);
    })
  }
  getAttendanceById(id:string)
  {
    this.http.get<any>(environment.API_Attendance,{headers:new HttpHeaders({
        'EmployeeId':id
      })}).subscribe(res=>{
      //console.log("!",res);
      this.AttendanceResponse = res;
      //console.log("?",this.response);
    })
  }

}
