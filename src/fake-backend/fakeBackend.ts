import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import {
  delay,
  dematerialize,
  materialize,
  mergeMap,
  Observable,
  of,
  throwError,
} from 'rxjs';

import { taskList } from '../data/TASKS';
import { Task, TaskBase } from 'src/models/task';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const { url, method, body, headers } = req;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch (true) {
        case url.endsWith('/tasks') && method === 'GET':
          return getTasks();
        case url.endsWith('/tasks') && method === 'POST':
          return addTask();
        case url.match(/\/tasks\/\d+$/) && method === 'GET':
          return getTaskById();
        case url.match(/\/tasks\/\d+$/) && method === 'PUT':
          return updateTask();
        default:
          return next.handle(req);
      }
    }

    function getTasks(): Observable<HttpResponse<TaskBase[]>> {
      return ok(
        taskList.map((task) => {
          return {
            id: task.id,
            name: task.name,
            status: task.status,
            dueDate: task.dueDate,
          };
        })
      );
    }

    function addTask(): Observable<HttpResponse<any>> {
      taskList.push(body);
      return okCreated();
    }

    function getTaskById(): Observable<HttpResponse<Task>> {
      const task = taskList.find((x) => {
        return x.id === getIdFromUrl();
      });
      if (!task) {
        return error(404, 'Task not found');
      }
      return ok(task);
    }

    function updateTask(): Observable<HttpResponse<any>> {
      const taskIndex = taskList.findIndex((x) => {
        return x.id === getIdFromUrl();
      });
      if (taskIndex === -1) {
        return error(404, 'Task not found');
      }
      taskList.splice(taskIndex, 1, body);
      // if (!task.comments) {
      //   task.comments = [];
      // }
      // task.comments.push(body);
      return ok(body);
    }

    function ok(body?: any): Observable<HttpResponse<any>> {
      return of(new HttpResponse({ status: 200, body }));
    }

    function okCreated(): Observable<HttpResponse<any>> {
      return of(new HttpResponse({ status: 201 }));
    }

    function error(status?: number, message?: string) {
      return throwError({ status, error: { message } });
    }

    function getIdFromUrl(): number {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  // use fake backend in place of Http service for backend-less development
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
