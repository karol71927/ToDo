import { Component, OnInit } from '@angular/core';
import { Day, DayName, MonthName } from 'src/models/calendar.model';
import { CalendarService } from '../calendar.service';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent implements OnInit {
  days: Day[];
  dueDays: Day[];

  dayNames = DayName;

  date: Date;

  month?: MonthName;
  year?: number;

  isModalOpened: boolean = false;
  selectedDate: Date;

  constructor(
    private calendarService: CalendarService,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.date = new Date();
    this.getMonth(this.date);
    this.getDueDates();
  }

  getDueDates() {
    this.taskService.getDueDates().subscribe((response) => {
      this.dueDays = [];
      response.forEach((date) => {
        this.dueDays.push(this.calendarService.convertDateToDay(date));
      });
    });
  }

  openModal(day: Day) {
    this.selectedDate = this.calendarService.convertDayToDate(day);
    this.isModalOpened = true;
  }

  isDueDay(day: Day): boolean {
    if (this.dueDays) {
      const index = this.dueDays.findIndex((dueDay) => {
        if (
          dueDay.day === day.day &&
          dueDay.month === day.month &&
          dueDay.year === day.year
        ) {
          return true;
        }
        return false;
      });
      return index !== -1;
    }
    return false;
  }

  isToday(day: Day): boolean {
    const today = this.calendarService.convertDateToDay(new Date());
    return (
      today.day === day.day &&
      today.month === day.month &&
      today.year === day.year
    );
  }

  getMonth(date: Date) {
    this.days = this.calendarService.getMonth(
      date.getMonth(),
      date.getFullYear()
    );
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
