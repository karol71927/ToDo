import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmojiData, EmojiEvent } from '@ctrl/ngx-emoji-mart/ngx-emoji';

@Component({
  selector: 'app-emoji-picker',
  templateUrl: './emoji-picker.component.html',
  styleUrls: ['./emoji-picker.component.scss'],
})
export class EmojiPickerComponent implements OnInit {
  @Input()
  isVisible: boolean;

  @Output()
  emoji = new EventEmitter<EmojiData>();

  constructor() {}

  ngOnInit(): void {}

  handleClick($event: EmojiEvent) {
    console.log($event.emoji);
    this.emoji.emit($event.emoji);
  }
}
