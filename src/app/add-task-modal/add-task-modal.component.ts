import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task, TaskStatus } from 'src/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.component.html',
  styleUrls: ['./add-task-modal.component.scss'],
})
export class AddTaskModalComponent implements OnInit {
  @Input()
  isOpened: boolean;
  @Output()
  isOpenedChange = new EventEmitter<boolean>();

  @Output()
  taskAdded = new EventEmitter<boolean>();

  taskForm = this.formBuilder.group({
    name: '',
    description: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {}

  modalClose() {
    this.isOpenedChange.emit(false);
  }

  onFormSubmit() {
    const task: Task = {
      id: 1,
      name: this.taskForm.value.name,
      status: TaskStatus.TODO,
      description: this.taskForm.value.description,
    };
    this.taskService.addTask(task).subscribe(() => {
      this.taskAdded.emit(true);
      this.taskForm.reset();
      this.modalClose();
    });
  }
}
