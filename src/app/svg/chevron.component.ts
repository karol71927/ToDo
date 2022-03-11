import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'svg-chevron',
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      [attr.fill]="fillColor"
      class="bi bi-chevron-right"
      viewBox="0 0 16 16"
      [ngStyle]="rotateChevron()"
    >
      <path
        fill-rule="evenodd"
        d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
      />
    </svg>
  `,
  styles: [],
})
export class ChevronComponent implements OnInit {
  @Input()
  fillColor: string = 'black';

  @Input()
  direction: string = 'right';

  constructor() {}

  ngOnInit(): void {}

  rotateChevron() {
    let rotation = 0;
    switch (this.direction) {
      default:
      case 'right':
        rotation = 0;
        break;
      case 'down':
        rotation = 90;
        break;
      case 'left':
        rotation = 180;
        break;
      case 'up':
        rotation = 270;
        break;
    }
    return { transform: `rotate(${rotation}deg)` };
  }
}
