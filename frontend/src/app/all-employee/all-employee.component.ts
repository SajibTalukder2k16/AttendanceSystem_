import { Component, OnInit } from '@angular/core';
import {ShowService} from "../Services/show.service";

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {

  constructor(private showservice:ShowService) { }
  dataNotfound=false;
  Data:any;
  ngOnInit(): void {
    this.showservice.getData();
    this.foo();
  }
  foo(){
    setTimeout(() => {
      if(this.showservice.Data==null)
      {
        this.dataNotfound=true;
      }
      else
      {
        this.Data=this.showservice.Data;
      }
      console.log(this.dataNotfound);

    },1000);
  }

}
