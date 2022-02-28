export enum TaskStatus {
  TODO = 'To do',
  INPROGRESS = 'In progress',
  DONE = 'Done',
}

export interface Comment {
  content: string;
  date: Date;
}

export interface TaskBase {
  id: number;
  name: string;
  status: TaskStatus;
}

export interface Task extends TaskBase {
  description: string;
  comments?: Comment[];
}
