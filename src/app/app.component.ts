import { Component } from '@angular/core';
export interface City {
  code: string;
  name: string;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'trip';
  cities: City[] = [
    {code: 'YUL', name: 'Montreal'},
  ];

  tripType = '';
}
