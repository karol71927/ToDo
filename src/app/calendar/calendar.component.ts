import { Component, OnInit } from '@angular/core';
import { Day, DayName, MonthName } from 'src/models/calendar.model';
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

  month?: MonthName;
  year?: number;

  constructor(private calendarService: CalendarService) {}

  ngOnInit(): void {
    this.date = new Date();
    this.getMonth(this.date);
  }

  getMonth(date: Date) {
    this.days = this.calendarService.getMonth(
      date.getMonth(),
      date.getFullYear()
    );
    console.log(this.days);
    this.getNames();
  }

  getNextMonth() {
    this.date.setMonth(this.date.getMonth() + 1);
    this.getMonth(this.date);
  }

  getPreviousMonth() {
    this.date.setMonth(this.date.getMonth() - 1);
    this.getMonth(this.date);
  }

  getNames() {
    const day = this.days.find((day) => day.monthName);
    this.month = day?.monthName;
    this.year = day?.year;
  }
}
