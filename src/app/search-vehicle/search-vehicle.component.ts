
import { Location } from '@angular/common';
import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-vehicle',
  templateUrl: './search-vehicle.component.html',
  styleUrls: ['./search-vehicle.component.scss']
})
export class SearchVehicleComponent implements OnInit {
  constructor( private location: Location) { 
      
  }
  ngOnInit() {
    
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }
}
