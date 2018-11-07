import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TripService} from './services/trip.service'
import { AppComponent } from './app.component';
import {MaterialModule} from './modules/material/material.module';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule, 
    MaterialModule, 
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [TripService],
  bootstrap: [AppComponent]
})
export class AppModule { }