import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Employee} from "../models/employee.model";
import {RegService} from "../Services/reg.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  userForm: FormGroup;
  isLoading: boolean = false;
  employee?:Employee;
  constructor(private formGroup: FormBuilder,private regService:RegService) {
    this.userForm = this.formGroup.group({
      EmployeeId: [''],
      FirstName: [''],
      LastName: [''],
      Designation:[''],
      Address:[''],
      Email: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,6}$'),
      ],],
      PhoneNumber: ['', [
        Validators.required,
        Validators.pattern('(^(01))[1|3-9]{1}(\\d){8}$'),
      ],],
      PIN: ['', [
        Validators.required,
        Validators.minLength(4),
      ]],
      Role: [''],
    });
  }

  ngOnInit(): void {
  }
  onSubmitButtonClick(): void {
    this.isLoading=true;
    this.employee = {
      FirstName: this.userForm.get('FirstName')?.value,
      LastName: this.userForm.get('LastName')?.value,
      EmployeeId: this.userForm.get('EmployeeId')?.value ,
      Email: this.userForm.get('Email')?.value,
      PIN: this.userForm.get('PIN')?.value,
      PhoneNumber: this.userForm.get('Phonenumber')?.value,
      Designation: this.userForm.get('Designation')?.value,
      Address: this.userForm.get('Address')?.value,
      Role: ''
    }
    console.log(this.employee);
    this.regService.addEmployee(this.employee);
    //console.log(this.userForm.get('EmployeeId'));
  }

}
