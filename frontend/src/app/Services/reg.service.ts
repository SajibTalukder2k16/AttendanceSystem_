import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Employee} from "../models/employee.model";

@Injectable({
  providedIn: 'root'
})
export class RegService {
  Data?:String;
  constructor(private http:HttpClient) { }
  addEmployee(emp:Employee)
  {
    this.http.post<any>(environment.API_Employee,emp).subscribe(res=>{
      //this.Data = data;
      console.log(res);

    })
  }
}
