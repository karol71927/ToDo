import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskStatus } from 'src/models/task';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  @Input()
  taskList: Task[];

  taskState = TaskStatus;

  constructor() {}

  ngOnInit(): void {}

  getTaskListByStatus(status: string): Task[] {
    return this.taskList.filter((task) => {
      return task.status === status;
    });
  }
}
