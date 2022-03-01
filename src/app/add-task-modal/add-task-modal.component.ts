import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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

  constructor() {}

  ngOnInit(): void {}

  modalClose() {
    this.isOpenedChange.emit(false);
  }
}