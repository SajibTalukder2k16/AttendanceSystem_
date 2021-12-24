import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {ShowService} from "../Services/show.service";
import {Attendance, Employee, MonthYear} from "../models/employee.model";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id='';
  HttpAttendance?:any;
  Data?:Employee|any;
  AttendanceData?:any;
  FilteredData:Array<Attendance> =[];
  Entries:Array<string>=[];
  Exits:Array<string>=[];
  userForm?: FormGroup;
  MY?:MonthYear;
  constructor(private route:ActivatedRoute,private showservice:ShowService,private fb:FormBuilder) {
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params.id;
    this.showservice.getDataById(this.id);
    this.showservice.getAttendanceById(this.id);
    setTimeout(() => {
      this.Data=this.showservice.response
      this.HttpAttendance=this.showservice.AttendanceResponse;
      this.AttendanceData=this.HttpAttendance;
    },3000)

  }

  FilterData(value: string){
    let year=value[0]+value[1]+value[2]+value[3];
    let month=value[5]+value[6];
    console.log(year," ",month);

    let size =this.HttpAttendance.length;
    //console.log(size);
    for(let i=0;i<size;i++)
    {
      //console.log(month,this.AttendanceData[i].Month);
      //console.log(year,this.AttendanceData[i].Year);
      if(this.HttpAttendance[i].Month==month && this.HttpAttendance[i].Year==year)
      {
        this.FilteredData.push(this.HttpAttendance[i]);
        //this.calculateTime(this.AttendanceData[i].ExitTime,this.AttendanceData[i].EntryTime);
      }
    }
    this.AttendanceData=this.FilteredData;
    this.FilteredData=[];
    if(value=='')
      this.AttendanceData=this.HttpAttendance;
    //console.log(this.FilteredData);
  }
  /*
  calculateTime(startTime:string,endTime:string)
  {
    let todayDate = moment(new Date()).format("MM-DD-YYYY"); //Instead of today date, We can pass whatever date

    let startDate = new Date(`${todayDate} ${startTime}`);
    let endDate = new Date(`${todayDate } ${endTime}`);
    let timeDiff = Math.abs(startDate.getTime() - endDate.getTime());

    let hh = Math.floor(timeDiff / 1000 / 60 / 60);
    let h = ('0' + hh).slice(-2)

    timeDiff -= hh * 1000 * 60 * 60;
    let mm = Math.floor(timeDiff / 1000 / 60);
    let m = ('0' + mm).slice(-2)

    timeDiff -= parseInt(m) * 1000 * 60;
    var ss = Math.floor(timeDiff / 1000);
    let s = ('0' + ss).slice(-2)

    alert("Time Diff- " + hh + ":" + mm + ":" + ss);
  }
  *
   */

}
