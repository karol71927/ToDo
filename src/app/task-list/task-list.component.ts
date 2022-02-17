import { Component, Input, OnInit } from '@angular/core';
import { taskList } from 'src/DATA/TASKS';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input()
  tasks: Task[];

  constructor() {}

  ngOnInit(): void {}
}
