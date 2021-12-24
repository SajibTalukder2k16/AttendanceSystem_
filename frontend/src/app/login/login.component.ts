import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Employee, LogInData} from "../models/employee.model";
import {LoginService} from "../Services/login.service";
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  isLoading: boolean = false;
  logIndata?:LogInData;
  res?:any;
  constructor(private formGroup: FormBuilder,private loginService:LoginService,private router:Router) {
    this.userForm = this.formGroup.group({
      EmployeeId: [''],
      PIN: ['', [
        Validators.required,
        Validators.minLength(4),
      ]],
    });
  }

  ngOnInit(): void {
  }
  onSubmitButtonClick(): void {
    this.isLoading=true;
    this.logIndata = {
      EmployeeId: this.userForm.get('EmployeeId')?.value ,
      PIN: this.userForm.get('PIN')?.value,
    }
    //console.log(this.employee);
    //this.regService.addEmployee(this.employee);
    this.loginService.logInEmployee(this.logIndata);
    //console.log(this.res);
    this.res=this.loginService.response;
    if(this.res==null)
    {
      setTimeout(() => {
        this.res=this.loginService.response;
        console.log(this.res);
        if(this.res=="NotAnEmployee")
        {
          window.location.reload();
        }
        else if(this.res=="member")
        {
          if(this.logIndata!=null)
            this.loginService.Id=this.logIndata.EmployeeId;
          this.router.navigateByUrl('home');
        }
        else if(this.res=="admin")
        {
          this.router.navigateByUrl('adminHome')
        }
      },3000)
    }
    //console.log(val);

    //console.log(this.userForm.get('EmployeeId'));
  }

}
