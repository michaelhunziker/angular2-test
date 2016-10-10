import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Book App';

  logEvent = function($event) {
    console.log('Click event: ', $event);
  }
}
