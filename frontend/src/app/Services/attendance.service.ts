import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Attendance, Employee} from "../models/employee.model";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  Data?:String;
  constructor(private http:HttpClient) { }
  addAttendance(attendance:Attendance)
  {
    this.http.post<any>(environment.API_Attendance,attendance).subscribe(res=>{
      //this.Data = data;
      console.log(res);

    })
  }
}
