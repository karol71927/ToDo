export enum DayName {
  Sunday = 'Sun',
  Monday = 'Mon',
  Tuesday = 'Tue',
  Wednesday = 'Wed',
  Thursday = 'Thu',
  Friday = 'Fri',
  Saturday = 'Sat',
}

export enum MonthName {
  January = 'Jan',
  February = 'Feb',
  March = 'Mar',
  April = 'Apr',
  May = 'May',
  June = 'Jun',
  July = 'Jul',
  August = 'Aug',
  September = 'Sep',
  October = 'Oct',
  November = 'Nov',
  December = 'Dec',
}

export interface Day {
  day: number;
  month: number;
  year: number;
  weekDayNumber: number;
  weekDayName: DayName;
  monthName: MonthName;
}
