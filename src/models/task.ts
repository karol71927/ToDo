export enum TaskStatus {
  TODO = 'To do',
  INPROGRESS = 'In progress',
  DONE = 'Done',
}

export interface Comment {
  content: string;
  date: Date;
}

export interface Task {
  id: number;
  name: string;
  description: string;
  status: TaskStatus;
  comments?: Comment[];
}
