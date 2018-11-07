import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TripService} from './services/trip.service'
import { AppComponent } from './app.component';
import {MaterialModule} from './modules/material/material.module';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import {DatePipe} from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule, 
    BrowserAnimationsModule,
    FormsModule, 
    HttpClientModule,
    HttpClientModule,
  ],
  providers: [TripService, DatePipe, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }