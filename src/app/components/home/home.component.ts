import { Component, OnInit } from '@angular/core';
export interface City {
  code: string;
  name: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'trip';
  cities: City[] = [
    {code: 'YUL', name: 'Montreal'},
  ];

  tripType = '';
  departDate: any;
  arrivalDate: Date;
  currentDate = new Date().getFullYear();
  constructor() { }

  ngOnInit() {
    console.log(this.currentDate);

  }
  viewItinerary()
  {
    console.log(this.departDate);

  }

}
