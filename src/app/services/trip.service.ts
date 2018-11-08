import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import {City} from '../models/city';
import { Capability } from 'protractor';
@Injectable({
  providedIn: 'root'
})
export class TripService {
  cities: City[];
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
}
