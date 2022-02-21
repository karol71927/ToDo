import { Component, Input, OnInit } from '@angular/core';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
})
export class TaskComponent implements OnInit {
  @Input()
  task: Task;

  modalOpen: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  openModal() {
    this.modalOpen = true;
  }
}
