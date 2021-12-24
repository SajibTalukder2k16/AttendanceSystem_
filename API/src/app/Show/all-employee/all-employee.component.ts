import {Component, Inject, OnInit} from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MatFormFieldControl} from "@angular/material/form-field";
import {MatFormField} from "@angular/material/form-field";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.css']
})
export class AllEmployeeComponent implements OnInit {
  userForm: FormGroup;
  Data:any=[];

  hasPassMatched: boolean = true;
  constructor(private _fb: FormBuilder,private http:HttpClient) {
    //console.log(data);
    this.userForm = this._fb.group({
      Password: ['', [
        Validators.minLength(4)
      ],],
      Confirmpassword: [''],
    });
  }
  openDialog() {
  }
  matchPassword(): void {
    //console.log(this.userForm.invalid)
    if (this.userForm.get('Password')?.value !==  this.userForm.get('Confirmpassword')?.value){
      this.hasPassMatched = false;
      this.userForm.get('Confirmpassword')?.markAsTouched()
      this.userForm.get('Confirmpassword')?.setErrors({'NotMatched': true});
    }
    else{
      this.hasPassMatched = true;
      this.userForm.get('Confirmpassword')?.setErrors(null);
    }
  }
  ngOnInit(): void {
    this.http.get<any>(environment.API_URL).subscribe(data=>{
      this.Data = data;
      console.log(data);
    })
  }




}
