import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment, Task, TaskBase } from 'src/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl: string = '';

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<TaskBase[]> {
    return this.httpClient.get<TaskBase[]>(`${this.baseUrl}/tasks`);
  }

  getTaskById(id: number): Observable<Task> {
    return this.httpClient.get<Task>(`${this.baseUrl}/tasks/${id}`);
  }

  updateTask(id: number, task: Task): Observable<any> {
    return this.httpClient.put(`${this.baseUrl}/tasks/${id}`, task);
  }

  addTask(task: Task) {
    return this.httpClient.post(`${this.baseUrl}/tasks`, task);
  }
}
