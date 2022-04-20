import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss'],
})
export class ClockComponent implements OnInit, OnDestroy {
  time: Date = new Date();
  subscription: Subscription;

  constructor() {}

  ngOnInit(): void {
    this.subscription = timer(0, 1000).subscribe(
      () => (this.time = new Date())
    );
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
