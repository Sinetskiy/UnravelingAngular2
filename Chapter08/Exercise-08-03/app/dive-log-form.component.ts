import {Component} from '@angular/core';
import {DiveLogEntry} from './dive-log-entry';

@Component({
  selector: 'dive-log-form',
  templateUrl: 'app/dive-log-form.template.html'
})
export class DiveLogFormComponent {
  specialDives = [
    "Night dive",
    "Deep dive",
    "Cave dive"
  ]

  entry: DiveLogEntry = {
    site: 'Shab El Erg',
    location: 'Hurghada, Egypt',
    depth: 125,
    time: 56,
    isFavorite: true,
    special: "Deep dive"
  }
}