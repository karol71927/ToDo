import {
  AfterContentChecked,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task, TaskStatus } from 'src/models/task';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnChanges {
  @Input()
  isVisible: boolean;
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  @Input()
  task: Task;

  commentForm = this.formBuilder.group({
    content: '',
  });

  selectedStatus: number;

  status: { id: number; name: string; status: TaskStatus }[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sortCommentsByDateAscending();
    this.fillStatus();
  }

  ngOnChanges(): void {
    if (this.status) {
      const status = this.status.find(
        (x) => x.id === this.selectedStatus
      )?.status;
      this.task.status = status ? status : this.task.status;
    }
  }

  fillStatus() {
    Object.entries(TaskStatus).forEach((x, index) =>
      this.status.push({ id: index, name: x[0], status: x[1] })
    );
    const currentStatus = this.status.find(
      (x) => x.name === this.task.status
    )?.id;
    this.selectedStatus = currentStatus ? currentStatus : 0;
  }

  sortCommentsByDateAscending() {
    if (
      this.task &&
      this.task.comments !== undefined &&
      this.task.comments !== null
    ) {
      this.task.comments.sort((a, b) => b.date.valueOf() - a.date.valueOf());
    }
  }

  getDisplay(): string {
    if (!this.isVisible) {
      return 'none';
    }
    return 'block';
  }

  modalClose() {
    if (this.isVisible) this.isVisibleChange.emit(false);
  }

  onSubmitComment(): void {
    if (!this.task.comments) {
      this.task.comments = [];
    }
    this.task.comments?.unshift({
      content: this.commentForm.value.content,
      date: new Date(Date.now()),
    });
    this.commentForm.reset();
  }
}
