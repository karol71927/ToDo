import { Component } from '@angular/core';
import { taskList } from 'src/data/TASKS';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  taskList = taskList;
  title = 'ToDo';
}
