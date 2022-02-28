import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TaskBase, TaskStatus } from 'src/models/task';
import { EnumToArrayPipe } from '../enum-to-array.pipe';

import { TaskBoardComponent } from './task-board.component';

const tasks: TaskBase[] = [
  {
    id: 1,
    name: 'task to do',
    status: TaskStatus.TODO,
  },
  {
    id: 2,
    name: 'task in progress',
    status: TaskStatus.INPROGRESS,
  },
  {
    id: 3,
    name: 'task done',
    status: TaskStatus.DONE,
  },
];

describe('TaskBoardComponent', () => {
  let component: TaskBoardComponent;
  let fixture: ComponentFixture<TaskBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskBoardComponent, EnumToArrayPipe],
      imports: [HttpClientTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardComponent);
    component = fixture.componentInstance;
    component.taskList = tasks;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should filter task by status', () => {
    it('should get tasks to do', () => {
      const list = component.getTaskListByStatus(TaskStatus.TODO);
      expect(list).toEqual([
        {
          id: 1,
          name: 'task to do',
          status: TaskStatus.TODO,
        },
      ]);
    });
    it('should get tasks to do', () => {
      const list = component.getTaskListByStatus(TaskStatus.INPROGRESS);
      expect(list).toEqual([
        {
          id: 2,
          name: 'task in progress',
          status: TaskStatus.INPROGRESS,
        },
      ]);
    });
    it('should get tasks to do', () => {
      const list = component.getTaskListByStatus(TaskStatus.DONE);
      expect(list).toEqual([
        {
          id: 3,
          name: 'task done',
          status: TaskStatus.DONE,
        },
      ]);
    });
  });
});
