import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskComponent } from './task/task.component';
import { TaskBoardComponent } from './task-board/task-board.component';
import { EnumToArrayPipe } from './enum-to-array.pipe';
import { ModalComponent } from './modal/modal.component';
import { ClickOutsideDirective } from './click-outside.directive';
import { XButtonComponent } from './svg/x-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { fakeBackendProvider } from 'src/fake-backend/fakeBackend';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskComponent,
    TaskBoardComponent,
    EnumToArrayPipe,
    ModalComponent,
    ClickOutsideDirective,
    XButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgSelectModule,
    HttpClientModule,
  ],
  providers: [fakeBackendProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
