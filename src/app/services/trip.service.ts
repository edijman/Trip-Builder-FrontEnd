import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map} from 'rxjs/operators';
import {City} from '../models/city';
@Injectable({
  providedIn: 'root'
})
export class TripService {
  cities: City[];
  flights: any[];
  airline: any[];
  baseUrl = 'http://www.slimapi.com'
  constructor(private http: HttpClient) 
  {

  }


  //get Cities
  getCities(): Observable<City[]>
  {
    return this.http.get(`${this.baseUrl}/cities`).pipe(
      map((res) => {
        this.cities = res['cities'];
        return this.cities;
      }));
  }


  //this will autofill form for select

  //get itinerary: One Way, 
  // this would collect destination, arrival, trip type:One Way or Round trip, and date leaving, date arriving()
  //would return itinerary -- yet to be formated


  //get intinenary: Round Trip
  // this would collect destination, arrival, date leaving, 
  //would return itinerary -- yet to be formated
  getItinerary(departureId, arrivalId, departDate): Observable<City[]>
  {
    return this.http.get(`${this.baseUrl}/itinerary/${departureId}/${arrivalId}/${departDate}`).pipe(
      map((res) => {
        console.log(res);
        this.flights = res['Flight'];
        return this.flights;
      }));
  }
  getAirline(departureId, arrivalId, departDate): Observable<City[]>
  {
    return this.http.get(`${this.baseUrl}/itinerary/${departureId}/${arrivalId}/${departDate}`).pipe(
      map((res) => {
        console.log(res);
        this.airline = res['Airline'];
        return this.airline;
      }));
  }
}
