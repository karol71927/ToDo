import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Task, TaskStatus } from 'src/models/task';
import { EnumToArrayPipe } from '../enum-to-array.pipe';

import { TaskBoardComponent } from './task-board.component';

const tasks: Task[] = [
  {
    name: 'task to do',
    description: 'desc',
    status: TaskStatus.TODO,
  },
  {
    name: 'task in progress',
    description: 'desc',
    status: TaskStatus.INPROGRESS,
  },
  {
    name: 'task done',
    description: 'desc',
    status: TaskStatus.DONE,
  },
];

describe('TaskBoardComponent', () => {
  let component: TaskBoardComponent;
  let fixture: ComponentFixture<TaskBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskBoardComponent, EnumToArrayPipe],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('should filter task by status', () => {
    const component = new TaskBoardComponent();
    component.taskList = tasks;
    it('should get tasks to do', () => {
      const list = component.getTaskListByStatus(TaskStatus.TODO);
      expect(list).toEqual([
        {
          name: 'task to do',
          description: 'desc',
          status: TaskStatus.TODO,
        },
      ]);
    });
    it('should get tasks to do', () => {
      const list = component.getTaskListByStatus(TaskStatus.INPROGRESS);
      expect(list).toEqual([
        {
          name: 'task in progress',
          description: 'desc',
          status: TaskStatus.INPROGRESS,
        },
      ]);
    });
    it('should get tasks to do', () => {
      const list = component.getTaskListByStatus(TaskStatus.DONE);
      expect(list).toEqual([
        {
          name: 'task done',
          description: 'desc',
          status: TaskStatus.DONE,
        },
      ]);
    });
  });
});
