import { DatePipe } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';
import { Day } from 'src/models/calendar.model';
import { Task } from 'src/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-calendar-task-modal',
  templateUrl: './calendar-task-modal.component.html',
  styleUrls: ['./calendar-task-modal.component.scss'],
})
export class CalendarTaskModalComponent implements OnChanges {
  @Input()
  isVisible: boolean;
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  @Input()
  date: Date;

  title: string;

  tasks: Task[];

  constructor(private taskService: TaskService, private datePipe: DatePipe) {}

  ngOnChanges() {
    console.log('ON changes');
    const date = this.datePipe.transform(this.date, 'dd-MMM-YYYY') as string;
    this.title = `Tasks on ${date}`;
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
