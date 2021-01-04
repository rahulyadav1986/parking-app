import { Component, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.scss']
})
export class AddVehicleComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm

  constructor(private location: Location) { }
  ngOnInit() {
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }
  
  onSubmit() {
    console.log(
      this.myForm.value
    )
  }
  
  

}
