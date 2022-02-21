import { Task, TaskStatus } from 'src/models/task';

export const taskList: Task[] = [
  {
    name: 'rzecz do zrobienia 1',
    description: 'opis',
    status: TaskStatus.TODO,
    comments: [
      {
        content: 'komentarz 1',
        date: new Date('2022-02-12'),
      },
      {
        content: 'komentarz 2',
        date: new Date('2022-02-21'),
      },
    ],
  },
  {
    name: 'rzecz do zrobienia 2',
    description: 'opis',
    status: TaskStatus.INPROGRESS,
  },
  {
    name: 'rzecz do zrobienia 3',
    description: 'opis',
    status: TaskStatus.DONE,
  },
  {
    name: 'rzecz do zrobienia 4',
    description: 'opis',
    status: TaskStatus.TODO,
  },
  {
    name: 'rzecz do zrobienia 5',
    description: 'opis',
    status: TaskStatus.TODO,
  },
  {
    name: 'rzecz do zrobienia 6',
    description: 'opis',
    status: TaskStatus.TODO,
  },
];
