import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Task } from 'src/models/task';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  isVisible: boolean;
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  @Input()
  task: Task;

  commentForm = this.formBuilder.group({
    content: '',
  });

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.sortCommentsByDateAscending();
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

  onSubmit(): void {
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
