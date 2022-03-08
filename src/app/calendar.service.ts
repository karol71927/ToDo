import { Injectable } from '@angular/core';
import { Day, DayName, MonthName } from 'src/models/calendar.model';

@Injectable({
  providedIn: 'root',
})
export class CalendarService {
  // currentMonth: number;
  // currentYear: number;

  constructor() {
    // let date = new Date();
    // this.currentYear = date.getFullYear();
    // this.currentMonth = date.getMonth();
  }

  getMonth(month: number, year: number): Day[] {
    let days = [];
    const firstDay = this.createDay(1, month, year);
    for (let i = 1; i < firstDay.weekDayNumber; i++) {
      days.push({
        weekDayNumber: i,
        month: month,
        year: year,
      } as Day);
    }
    days.push(firstDay);
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    for (let i = 2; i < daysInMonth + 1; i++) {
      const day = this.createDay(i, month, year);
      days.push(day);
    }
    return days;
  }

  private createDay(dayNumber: number, month: number, year: number): Day {
    const day = new Date(year, month, dayNumber).getDay();
    return {
      day: dayNumber,
      month: month,
      year: year,
      weekDayNumber: day,
      weekDayName: this.getWeekDayName(day),
      monthName: this.getMonthName(month),
    };
  }

  private getWeekDayName(day: number): DayName {
    // let map = new Map<number,DayName>();
    // const weekDays = Object.entries(DayName).forEach((entry, index) => {
    //   map.set(index, entry[1]);
    // });
    // const weekDayName =  map.get(weekDay) ? map.get(weekDay) : DayName.Monday;
    // return weekDayName ? weekDayName : DayName.Monday;
    return Object.entries(DayName)[day][1];
  }

  private getMonthName(month: number): MonthName {
    return Object.entries(MonthName)[month][1];
  }
}
