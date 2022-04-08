import { DatePipe } from '@angular/common';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Day } from 'src/models/calendar.model';
import { Task } from 'src/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-calendar-task-modal',
  templateUrl: './calendar-task-modal.component.html',
  styleUrls: ['./calendar-task-modal.component.scss'],
})
export class CalendarTaskModalComponent implements OnInit {
  @Input()
  isVisible: boolean;
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  @Input()
  date: Date;

  title: string;

  tasks: Task[];

  constructor(private taskService: TaskService, private datePipe: DatePipe) {}

  ngOnInit(): void {
    const date = this.datePipe.transform(this.date, 'dd-MMM-YYYY') as string;
    this.title = `Tasks on ${date}`;
    this.getTaskByDueDate();
  }

  onChanges() {
    this.getTaskByDueDate();
  }

  getTaskByDueDate() {
    console.log(this.date);
    this.taskService.getTasksByDueDate(this.date).subscribe((response) => {
      this.tasks = response;
    });
  }

  modalClose() {
    if (this.isVisible) this.isVisibleChange.emit(false);
  }
}
