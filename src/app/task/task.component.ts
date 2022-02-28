import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TaskBase } from 'src/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input()
  task: TaskBase;

  @Output()
  statusChanged = new EventEmitter<boolean>();

  modalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modalOpen = true;
  }

  onStatusChanged(statusChanged: boolean) {
    if (!statusChanged) {
      return;
    }
    this.statusChanged.emit(statusChanged);
  }
}
