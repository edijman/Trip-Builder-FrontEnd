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

  firstFlights: any[];
  secondFlights: any[];

  selectedDepartureCityId : any;
  selectedArrivalCityId : any;
  arivalCityName: string;
  departureCityName: string;

  tripType = '';
  departDate: any;
  arrivalDate: Date;

  selectDepartStatus = false;
  selectArrivalStatus = false;

 
  // get current date 
  currentDate = this.datePipe.transform(Date.now(), "yyyy-MM-dd");
  nextYear: any = new Date().getFullYear() + 1;
  date = new Date().setFullYear(this.nextYear);
  //get exactly the a year from current date
  aYearDate = this.datePipe.transform(this.date, "yyyy-MM-dd");
  tripStatus: boolean = true;


  constructor(private datePipe: DatePipe, private tripService: TripService) {
        //get cities to populate the drop down
        this.getCities();
   }

  ngOnInit()
  {

  }

  // This function submit itineray form
  viewItinerary()
  {
    if(this.tripStatus)
    {
      this.tripService.getItinerary(this.selectedDepartureCityId, this.selectedArrivalCityId, this.departDate).subscribe(flights => 
        {
          this.firstFlights = flights;
          // console.log(this.firstFlights)
          // console.log(this.departDate);
          
        }
      );
    }
    else
    {

      this.tripService.getItinerary(this.selectedDepartureCityId, this.selectedArrivalCityId, this.departDate).subscribe(flights => 
        {
          this.firstFlights = flights;
          // console.log(this.firstFlights)
          // console.log(this.departDate);
          
        }
      );

      this.tripService.getItinerary(this.selectedArrivalCityId, this.selectedDepartureCityId, this.departDate).subscribe(flights => 
        {
          this.secondFlights = flights;
          // console.log(this.secondFlights)
          // console.log(this.departDate);
          
        }
      );

    }


  }

  //update trip status to dynamically create form
  updateTripStatus(){
    if(this.tripType == 'Round Trip'){
      this.tripStatus = false;
    }
    else{
      this.tripStatus = true;

    }
    console.log(this.tripType);
  }

  //return the list of from the database
  getCities()
  {
    this.tripService.getCities().subscribe(cities => 
      {
        this.cities = cities;
        // console.log(this.cities)
        
      }
    );

  }
  setArrivalCityName(event)
  {
    this.setArrivalCityName = event.srcElement.innerText;
     this.selectArrivalStatus =true;
  }

  setDepartureCityName(event)
  {
    this.departureCityName = event.srcElement.innerText;
    this.selectDepartStatus =true;

  }



}
