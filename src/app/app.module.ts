import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { ViewTaskModalComponent } from './view-task-modal/view-task-modal.component';
import { XButtonComponent } from './svg/x-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { fakeBackendProvider } from 'src/fake-backend/fakeBackend';
import { HttpClientModule } from '@angular/common/http';
import { AddTaskModalComponent } from './add-task-modal/add-task-modal.component';
import { ModalComponent } from './modal/modal.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ChevronComponent } from './svg/chevron.component';
import { CalendarTaskModalComponent } from './calendar-task-modal/calendar-task-modal.component';
import { DatePipe } from '@angular/common';
import { ClockComponent } from './clock/clock.component';
import { EmojiPickerComponent } from './emoji-picker/emoji-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskBoardComponent,
    EnumToArrayPipe,
    ViewTaskModalComponent,
    XButtonComponent,
    AddTaskModalComponent,
    ModalComponent,
    CalendarComponent,
    ChevronComponent,
    CalendarTaskModalComponent,
    ClockComponent,
    EmojiPickerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
    PickerModule,
    EmojiModule,
  ],
  providers: [fakeBackendProvider, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
