import { Component, OnInit } from '@angular/core';
import { taskList } from 'src/DATA/TASKS';
import { Task, TaskStatus } from 'src/models/task';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  taskState = TaskStatus;

  constructor() {}

  ngOnInit(): void {}

  getTaskListByStatus(status: string): Task[] {
    return taskList.filter((task) => {
      return task.status === status;
    });
  }
}
