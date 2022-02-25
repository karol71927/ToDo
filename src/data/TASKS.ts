import { Task, TaskStatus } from 'src/models/task';

export const taskList: Task[] = [
  {
    id: 1,
    name: 'rzecz do zrobienia 1',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    status: TaskStatus.TODO,
    comments: [
      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date('2022-02-12'),
      },
      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date('2022-02-21'),
      },
      {
        content:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        date: new Date('2022-02-22'),
      },
    ],
  },
  {
    id: 2,
    name: 'rzecz do zrobienia 2',
    description: 'opis',
    status: TaskStatus.INPROGRESS,
  },
  {
    id: 3,
    name: 'rzecz do zrobienia 3',
    description: 'opis',
    status: TaskStatus.DONE,
  },
  {
    id: 4,
    name: 'rzecz do zrobienia 4',
    description: 'opis',
    status: TaskStatus.TODO,
  },
  {
    id: 5,
    name: 'rzecz do zrobienia 5',
    description: 'opis',
    status: TaskStatus.TODO,
  },
  {
    id: 6,
    name: 'rzecz do zrobienia 6',
    description: 'opis',
    status: TaskStatus.TODO,
  },
];
