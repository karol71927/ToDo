import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Task, TaskStatus } from 'src/models/task';

import { ViewTaskModalComponent } from './view-task-modal.component';

const task: Task = {
  id: 1,
  name: 'task',
  description: 'desc',
  status: TaskStatus.TODO,
  comments: [
    { content: '1', date: new Date('2022-02-22') },
    { content: '2', date: new Date('2022-01-22') },
    { content: '3', date: new Date('2022-03-22') },
  ],
};

describe('ModalComponent', () => {
  let component: ViewTaskModalComponent;
  let fixture: ComponentFixture<ViewTaskModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewTaskModalComponent],
      imports: [ReactiveFormsModule, HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sort comments by date ascending', () => {
    component.task = task;
    component.sortCommentsByDateAscending();
    expect(task).toEqual({
      id: 1,
      name: 'task',
      description: 'desc',
      status: TaskStatus.TODO,
      comments: [
        { content: '3', date: new Date('2022-03-22') },
        { content: '1', date: new Date('2022-02-22') },
        { content: '2', date: new Date('2022-01-22') },
      ],
    });
  });

  describe('should get display', () => {
    it('display should be none', () => {
      component.isVisible = false;
      expect(component.getDisplay()).toEqual('none');
    });
    it('display should be block', () => {
      component.isVisible = true;
      expect(component.getDisplay()).toEqual('block');
    });
  });
});
