import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { EmojiData } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { Comment, Task, TaskStatus } from 'src/models/task';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-view-task-modal',
  templateUrl: './view-task-modal.component.html',
  styleUrls: ['./view-task-modal.component.scss'],
})
export class ViewTaskModalComponent implements OnInit {
  @Input()
  isVisible: boolean;
  @Output()
  isVisibleChange = new EventEmitter<boolean>();

  @Input()
  taskId: number;

  @Output()
  statusChanged = new EventEmitter<boolean>();

  task: Task;

  isEmojiPickerVisible: boolean = false;

  commentForm = this.formBuilder.group({
    content: '',
  });

  @ViewChild('textArea') _textArea: ElementRef;

  selectedStatus: number;

  status: { id: number; name: string; status: TaskStatus }[];

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    this.getTask();
    this.sortCommentsByDateAscending();
    this.fillStatus();
  }

  getTask() {
    this.taskService.getTaskById(this.taskId).subscribe((data) => {
      this.task = data;
      this.getSelectedStatus();
    });
  }

  fillStatus() {
    this.status = [];
    Object.entries(TaskStatus).forEach((x, index) =>
      this.status.push({ id: index, name: x[0], status: x[1] })
    );
  }

  getSelectedStatus() {
    const selectedStatus = this.status.find(
      (x) => x.name === this.task.status
    )?.id;
    this.selectedStatus = selectedStatus ? selectedStatus : 0;
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

  modalClose() {
    this.updateStatus();
    if (this.isVisible) this.isVisibleChange.emit(false);
  }

  onSubmitComment(): void {
    if (this.isEmojiPickerVisible) return;
    const comment = {
      content: this.commentForm.value.content,
      date: new Date(Date.now()),
    };
    this.addComment(comment);
    this.commentForm.reset();
  }

  addComment(comment: Comment) {
    if (!this.task.comments) {
      this.task.comments = [];
    }
    this.task.comments?.unshift(comment);
    this.taskService.updateTask(this.taskId, this.task).subscribe((data) => {
      this.task = data;
      this.sortCommentsByDateAscending();
    });
  }

  updateStatus() {
    if (this.status) {
      const status = this.status.find(
        (x) => x.id === this.selectedStatus
      )?.status;
      if (status !== this.task.status) {
        this.task.status = status ? status : this.task.status;
        this.taskService
          .updateTask(this.taskId, this.task)
          .subscribe((data) => {
            this.task = data;
          });
        this.statusChanged.emit(true);
      }
    }
  }

  addEmojiToComment(emoji: EmojiData) {
    const textArea = this._textArea.nativeElement as HTMLTextAreaElement;
    let content = this.commentForm.value.content as string;
    if (emoji.native) {
      content = `${content.substring(0, textArea.selectionStart)}${
        emoji.native
      }${content.substring(textArea.selectionEnd)}`;
      console.log(textArea.selectionStart, textArea.selectionEnd);
    }
    this.commentForm.patchValue({
      content,
    });
  }

  clickEmojiPicker() {
    this.isEmojiPickerVisible = !this.isEmojiPickerVisible;
  }
}
