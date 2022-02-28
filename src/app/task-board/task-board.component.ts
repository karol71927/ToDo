import { Component, OnInit } from '@angular/core';
import { TaskBase, TaskStatus } from 'src/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  taskList: TaskBase[] = [];

  taskStatus = TaskStatus;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data: TaskBase[]) => {
      this.taskList = data;
    });
  }

  getTaskListByStatus(status: string): TaskBase[] {
    return this.taskList.filter((task) => {
      return task.status === status;
    });
  }

  onStatusChanged(statusChanged: boolean) {
    if (statusChanged) {
      this.getTasks();
    }
  }
}
