import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { TaskService } from './task.service';
import { Task, TaskStatus } from 'src/models/task';

describe('TaskService', () => {
  let service: TaskService;

  const tasks: Task[] = [
    { id: 1, name: 'task name1', description: 'desc', status: TaskStatus.TODO },
    { id: 2, name: 'task name2', description: 'desc', status: TaskStatus.TODO },
  ];

  const task: Task = tasks[0];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(TaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  xit('should get tasks', (done) => {
    service.getTasks().subscribe((value) => {
      expect(value).withContext('tasks').toEqual(tasks);
      done();
    });
  });

  xit('should get task with id 1', (done) => {
    let result: Task;
    service.getTaskById(1).subscribe((value) => {
      result = value;
      expect(result).toEqual(task);
      done();
    });
  });

  xit('should add task', (done) => {
    service.addTask(task).subscribe((value) => {
      done();
    });
  });
});
