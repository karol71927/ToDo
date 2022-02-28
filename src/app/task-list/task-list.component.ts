import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskBase } from 'src/models/task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  @Input()
  tasks: TaskBase[];

  @Output()
  statusChanged = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onStatusChanged(statusChanged: boolean) {
    this.statusChanged.emit(statusChanged);
  }
}
