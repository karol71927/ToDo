import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private baseUrl: string = '';

  constructor(private httpClient: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(`${this.baseUrl}/tasks`);
  }
}
