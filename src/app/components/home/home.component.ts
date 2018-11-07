import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
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
 
  // get current date 
  currentDate = this.datePipe.transform(Date.now(), "yyyy-MM-dd");
  nextYear: any = new Date().getFullYear() + 1;
  date = new Date().setFullYear(this.nextYear);
  //get exactly the a year from current date
  aYearDate = this.datePipe.transform(this.date, "yyyy-MM-dd");
  tripStatus: boolean = true;
  constructor(private datePipe: DatePipe) {

   }

  ngOnInit()
  {
    console.log(this.currentDate);
    console.log(this.aYearDate);


  }

  // This function submit itineray form
  viewItinerary()
  {
    console.log(this.departDate);
  }

  //update trip status to dynamically create form
  updateTripStatus(){
    if(this.tripType == 'Round Trip'){
      this.tripStatus = false;
    }
    else{
      this.tripStatus = true;

    }
    console.log(this.tripStatus);
  }

}
