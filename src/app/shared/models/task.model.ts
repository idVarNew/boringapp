export class StoreModel {
  filters: FiltersModel;
  tasks: Array<TaskModel>;
  user: UserModel;
}

export class UserModel {
  logIn: boolean;
}

export class FiltersModel {
  byLabel: string;
  byDueDate: string;
  bySearchQuery: string;
}

export class TaskModel {
  id: string;
  description: string;
  status: string;
  dueDate: { year: number; month: number; day: number };
  importance: boolean;
  publishDate: string;
  labels: Array<string>;
  color: string;
  comments: Array<string>;
  opened: boolean;
}

export class CommentModel {
  id: string;
  comment: string;
  publishDate: number;
}

export class NewTask {
  color: string;
  comments: Array<{ comment: string; publishDate: string }>;
  description: { text: string };
  dueDate: { year: number; month: number; day: number };
  importance: boolean;
  labels: Array<string>;
  status: string;
}
