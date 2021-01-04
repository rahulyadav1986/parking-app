import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm
  constructor(private location: Location) { }
  ngOnInit() {
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }
  onSubmit() {
    console.log(this.myForm)
  }

 

}
