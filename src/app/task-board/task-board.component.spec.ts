import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EnumToArrayPipe } from '../enum-to-array.pipe';

import { TaskBoardComponent } from './task-board.component';

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
});
