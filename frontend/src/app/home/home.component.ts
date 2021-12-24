import { Component, OnInit } from '@angular/core';
import {ShowService} from "../Services/show.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private showservice:ShowService) { }
  loadRegistrationPageforAdmin=(this.showservice.Data==null)?false:true;
  ngOnInit(): void {
    this.showservice.getData();
    //this.foo();
  }
  /*
  foo(){
    setTimeout(() => {
      if(this.showservice.Data==null)
      {
        this.loadRegistrationPageforAdmin=true;
      }
      //console.log(this.loadRegistrationPageforAdmin);

    },1000);


  }

   */


}
