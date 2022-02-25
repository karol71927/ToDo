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
import { Task } from 'src/models/task';

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
        case url.match(/\/tasks\/\d+$/) && method === 'POST':
          return addComment();
        default:
          return next.handle(req);
      }
    }

    function getTasks(): Observable<HttpResponse<Task[]>> {
      return ok(taskList);
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

    function addComment(): Observable<HttpResponse<any>> {
      const task = taskList.find((x) => {
        return x.id === getIdFromUrl();
      });
      if (!task) {
        return error(404, 'Task not found');
      }
      if (!task.comments) {
        task.comments = [];
      }
      task.comments.push(body);
      return okCreated();
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
