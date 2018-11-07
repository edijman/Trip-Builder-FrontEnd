import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {TripService} from '../../services/trip.service';
import {City} from '../../models/city';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'trip';
  cities: City[];

  tripType = '';
  departDate: any;
  arrivalDate: Date;
 
  // get current date 
  currentDate = this.datePipe.transform(Date.now(), "yyyy-MM-dd");
  nextYear: any = new Date().getFullYear() + 1;
  date = new Date().setFullYear(this.nextYear);
  //get exactly the a year from current date
  aYearDate = this.datePipe.transform(this.date, "yyyy-MM-dd");
  tripStatus: boolean = true;


  constructor(private datePipe: DatePipe, private tripService: TripService) {

   }

  ngOnInit()
  {

  }

  // This function submit itineray form
  viewItinerary()
  {
    // console.log(`You would be leaving ${this.cities[0].name} on ${this.departDate} to ${this.cities[0].name} on ${this.arrivalDate}`);
    this.tripService.getCities().subscribe(cities => 
      {
        this.cities = cities;
        console.log(this.cities)
        
      }
    );
  }

  //update trip status to dynamically create form
  updateTripStatus(){
    if(this.tripType == 'Round Trip'){
      this.tripStatus = false;
    }
    else{
      this.tripStatus = true;

    }
  }

}
