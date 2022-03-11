import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Day, DayName, MonthName } from 'src/models/calendar.model';
import { EnumToArrayPipe } from '../enum-to-array.pipe';

import { CalendarComponent } from './calendar.component';

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalendarComponent, EnumToArrayPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get month', () => {
    component.getMonth(new Date('03-01-2022'));
    expect(component.days).toContain({
      day: 1,
      month: 2,
      year: 2022,
      weekDayNumber: 2,
      weekDayName: DayName.Tuesday,
      monthName: MonthName.March,
    } as Day);
    expect(component.month).toEqual(MonthName.March);
    expect(component.year).toEqual(2022);
  });

  it('should get next month', () => {
    component.date = new Date('03-01-2022');
    component.getNextMonth();
    expect(component.days).toContain({
      day: 1,
      month: 3,
      year: 2022,
      weekDayNumber: 5,
      weekDayName: DayName.Friday,
      monthName: MonthName.April,
    } as Day);
    expect(component.month).toEqual(MonthName.April);
    expect(component.year).toEqual(2022);
  });

  it('should get previous month', () => {
    component.date = new Date('03-01-2022');
    component.getPreviousMonth();
    expect(component.days).toContain({
      day: 1,
      month: 1,
      year: 2022,
      weekDayNumber: 2,
      weekDayName: DayName.Tuesday,
      monthName: MonthName.February,
    } as Day);
    expect(component.month).toEqual(MonthName.February);
    expect(component.year).toEqual(2022);
  });
});
