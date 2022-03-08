import { Component, OnInit } from '@angular/core';
import { Day, DayName } from 'src/models/calendar.model';
import { CalendarService } from '../calendar.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: Day[];

  dayNames = DayName;

  date: Date;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.date = new Date();
    this.days = this.calendarService.getMonth(
      this.date.getMonth() + 4,
      this.date.getFullYear()
    );
    console.log(this.days);
  }
}
