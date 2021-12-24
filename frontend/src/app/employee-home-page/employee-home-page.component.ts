import { Component, OnInit } from '@angular/core';
import {Attendance} from "../models/employee.model";
import {LoginService} from "../Services/login.service";
import {AttendanceService} from "../Services/attendance.service";

@Component({
  selector: 'app-employee-home-page',
  templateUrl: './employee-home-page.component.html',
  styleUrls: ['./employee-home-page.component.css']
})
export class EmployeeHomePageComponent implements OnInit {

  suite1="Click to Enter into Suite1";
  suite2="Click to Enter into Suite2";
  suite3="Click to Enter into Suite3";
  clicked1=false;
  clicked2=false;
  clicked3=false;
  EntereredMsg="Click The Colorful Box To Enter Into the Suite";
  EntryTime="";
  ExitTime="";
  Date="";
  Month="";
  Year="";
  attendance?:Attendance;
  currentSuite='';

  constructor(private logService:LoginService,private attendanceService:AttendanceService) { }

  ngOnInit(): void {
  }
  onClick1()
  {
    this.timeNow();
    this.clicked1=!this.clicked1;
    if(this.clicked1)
    {
      this.currentSuite="1";
      this.EntereredMsg="You have Entered into Suite1";
      this.suite1="Click to Exit from Suite1";
      this.EntryTime=this.timeNow();
    }
    else {
      this.EntereredMsg="Click The Colorful Box To Enter Into the Suite";;
      this.suite1="Click to Enter into Suite1";
      this.ExitTime=this.timeNow();
      this.attendance={
        EmployeeId:this.logService.Id,
          EntryTime:this.EntryTime,
          ExitTime:this.ExitTime,
          Suite:this.currentSuite,
          Date:this.Date,
          Month:this.Month,
          Year:this.Year
      }
      this.attendanceService.addAttendance(this.attendance);

    }
  }
  onClick2()
  {
    this.clicked2=!this.clicked2;
    if(this.clicked2)
    {
      this.currentSuite="2";
      this.EntereredMsg="You have Entered into Suite2";
      this.suite2="Click to Exit from Suite2";
      this.EntryTime=this.timeNow();
    }
    else {
      this.EntereredMsg="Click The Colorful Box To Enter Into the Suite";;
      this.suite2="Click to Enter into Suite2";
      this.ExitTime=this.timeNow();
      this.attendance={
        EmployeeId:this.logService.Id,
        EntryTime:this.EntryTime,
        ExitTime:this.ExitTime,
        Suite:this.currentSuite,
        Date:this.Date,
        Month:this.Month,
        Year:this.Year
      }
      this.attendanceService.addAttendance(this.attendance);
    }
  }
  onClick3()
  {
    this.clicked3=!this.clicked3;
    if(this.clicked3)
    {
      this.currentSuite="3";
      this.EntereredMsg="You have Entered into Suite3";
      this.suite3="Click to Exit from Suite3";
      this.EntryTime=this.timeNow();
    }
    else {
      this.EntereredMsg="Click The Colorful Box To Enter Into the Suite";;
      this.suite3="Click to Enter into Suite3";
      this.ExitTime=this.timeNow();
      this.attendance={
        EmployeeId:this.logService.Id,
        EntryTime:this.EntryTime,
        ExitTime:this.ExitTime,
        Suite:this.currentSuite,
        Date:this.Date,
        Month:this.Month,
        Year:this.Year
      }
      this.attendanceService.addAttendance(this.attendance);
    }
  }
  timeNow() {
    var d = new Date(),
      date=(d.getMinutes()<10?'0':'') + d.getDate(),
      month=(d.getMinutes()<10?'0':'') + d.getMonth(),
      year=(d.getMinutes()<10?'0':'') + d.getFullYear(),
      h = (d.getHours()<10?'0':'') + d.getHours(),
      m = (d.getMinutes()<10?'0':'') + d.getMinutes(),
      s = (d.getMinutes()<10?'0':'') + d.getSeconds();
    //i.value = h + ':' + m;
    this.Date=date;
    this.Month=(parseInt(month)+1).toString();
    this.Year=year;
    return h+':'+m+':'+s;
  }

}
