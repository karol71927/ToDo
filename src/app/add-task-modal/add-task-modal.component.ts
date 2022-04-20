import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  task: Task = { name: '', description: '', status: TaskStatus.TODO, id: 1 };

  taskForm: FormGroup;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskForm = this.createForm();
  }

  createForm(): FormGroup {
    return new FormGroup({
      name: new FormControl(this.task.name, [
        Validators.required,
        Validators.minLength(10),
      ]),
      description: new FormControl(this.task.description, [
        Validators.required,
        Validators.minLength(50),
      ]),
      date: new FormControl(this.task.dueDate),
    });
  }

  get name() {
    return this.taskForm.get('name');
  }

  get description() {
    return this.taskForm.get('description');
  }

  modalClose() {
    this.isOpenedChange.emit(false);
  }

  onFormSubmit() {
    const task: Task = {
      id: 1,
      name: this.taskForm.value.name,
      status: TaskStatus.TODO,
      description: this.taskForm.value.description,
      dueDate:
        this.taskForm.value.date !== '' ? this.taskForm.value.date : undefined,
    };
    this.taskService.addTask(task).subscribe(() => {
      this.taskAdded.emit(true);
      this.taskForm.reset();
      this.modalClose();
    });
  }
}
