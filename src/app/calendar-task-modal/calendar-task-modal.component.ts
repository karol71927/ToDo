import { formatDate } from '@angular/common';
import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  Inject,
  LOCALE_ID,
} from '@angular/core';
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

  modalOpen: boolean = false;
  taskId: number;

  constructor(
    private taskService: TaskService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnChanges() {
    if (this.date) {
      const date = formatDate(this.date, 'dd-MMM-YYYY', this.locale);
      this.title = `Tasks on ${date}`;
      this.getTaskByDueDate();
    }
  }

  getTaskByDueDate() {
    this.taskService.getTasksByDueDate(this.date).subscribe((response) => {
      this.tasks = response;
    });
  }

  modalClose() {
    if (this.isVisible) this.isVisibleChange.emit(false);
  }

  clickTask(id: number) {
    this.modalOpen = true;
    this.taskId = id;
  }
}
