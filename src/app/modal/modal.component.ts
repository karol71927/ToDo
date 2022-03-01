import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input()
  isOpened: boolean;
  @Output()
  isOpenedChange = new EventEmitter<boolean>();

  @Input()
  title: string;

  constructor() {}

  ngOnInit(): void {}

  modalClose() {
    this.isOpenedChange.emit(false);
  }
}
