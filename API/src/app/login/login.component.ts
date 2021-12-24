import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Environment } from "@angular/compiler-cli/src/ngtsc/typecheck/src/environment";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  isFormSubmit = false;
  Data:any=[];

  constructor(private formBuilder: FormBuilder,private http:HttpClient) {
    this.userForm = this.formBuilder.group({
      EmployeeId : ['', [
        Validators.required,
      ]],
      PIN: ['', [
        Validators.required,
        Validators.minLength(4),
      ]]
    });
  }

  ngOnInit(): void {
  }
  onSubmit():void{
    this.http.get<any>(environment.API_URL+this.userForm.get('EmployeeId')?.value).subscribe(data=>{
      console.log("Hello",this.userForm.get('EmployeeId')?.value);
      this.Data = data;
      console.log(data);
    })
    //console.log(this.userForm);
  }


}
