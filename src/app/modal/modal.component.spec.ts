import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Task, TaskStatus } from 'src/models/task';

import { ModalComponent } from './modal.component';

const task: Task = {
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
  let component: ModalComponent;
  let fixture: ComponentFixture<ModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModalComponent],
      imports: [ReactiveFormsModule],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalComponent);
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
