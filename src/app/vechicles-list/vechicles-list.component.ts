import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
@Component({
  selector: 'app-vechicles-list',
  templateUrl: './vechicles-list.component.html',
  styleUrls: ['./vechicles-list.component.scss']
})
export class VechiclesListComponent implements OnInit {

  constructor(private location: Location) { }
  ngOnInit() {
  }
  goBack() {
    // window.history.back();
    this.location.back();
  }

}
