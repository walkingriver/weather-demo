import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Postition:Sticky Demo';

  dataItems = [
    {
      title: 'Pre-Dawn', times: [
        { time: '4:00 AM', temp: 55 },
        { time: '5:00 AM', temp: 60 },
        { time: '6:00 AM', temp: 65 },
      ]
    },
    {
      title: 'Sunrise', times: [
        { time: '6:12 AM', temp: 66 }]
    },
    {
      title: 'Morning', times: [
        { time: '7:00 AM', temp: 70 },
        { time: '8:00 AM', temp: 75 },
        { time: '9:00 AM', temp: 80 },
      ]
    },
    {
      title: 'Noon', times: [
        { time: '12:00 PM', temp: 85 },
      ]
    },
    {
      title: 'Afternoon', times: [
        { time: '1:00 PM', temp: 80 },
        { time: '2:00 PM', temp: 75 },
        { time: '3:00 PM', temp: 70 },
      ]
    },
    {
      title: 'Sunset', times: [
        { time: '6:12 PM', temp: 66 }]

    },
    {
      title: 'Evening', times: [
        { time: '7:00 PM', temp: 60 },
        { time: '8:00 PM', temp: 55 },
        { time: '9:00 PM', temp: 50 },
      ]
    },
  ];
}
