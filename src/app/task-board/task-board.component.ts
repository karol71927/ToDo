import { Component, Input, OnInit } from '@angular/core';
import { Task, TaskStatus } from 'src/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-board',
  templateUrl: './task-board.component.html',
  styleUrls: ['./task-board.component.scss'],
})
export class TaskBoardComponent implements OnInit {
  @Input()
  taskList: Task[];

  taskStatus = TaskStatus;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((data: Task[]) => {
      console.log(data);
      this.taskList = data;
    });
  }

  getTaskListByStatus(status: string): Task[] {
    return this.taskList.filter((task) => {
      return task.status === status;
    });
  }
}
