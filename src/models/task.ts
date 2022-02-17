export enum TaskStatus {
  TODO = 'To do',
  INPROGRESS = 'In progress',
  DONE = 'Done',
}

export interface Task {
  name: string;
  description: string;
  status: TaskStatus;
}
