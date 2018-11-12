import { Action } from '@ngrx/store';
import { TaskModel, CommentModel, NewTask } from '../../shared/models/task.model';

export const ADD_NEW_TASK = '[tasks] ADD NEW TASK';
export const DELATE_TASK = '[tasks] REMOVE TASK';
export const ADD_NEW_LABELS = '[tasks] ADD NEW LABELS';
export const LOAD_INITIAL_TASKS = '[tasks] LOAD INITIAL TASKS';
export const EDIT_TASK = '[tasks] EDIT_TASK';
export const EDIT_LABELS = '[tasks] EDIT_LABELS';
export const REMOVE_LABEL = '[tasks] REMOVE_LABEL';
export const LOAD = '[tasks] LOAD';
export const CHANGE_STATUS = '[tasks] CHANGE STATUS';
export const ADD_COMMENT = '[tasks] ADD COMMENT';
export const REMOVE_COMMENT = '[tasks] REMOVE COMMENT';
export const RESET_STORE = '[tasks] RESET_STORE';
export const OPENED = '[tasks] OPENED';

export class loadTasks implements Action {
  readonly type = LOAD;
}

export class loadInitialTasks implements Action {
  readonly type = LOAD_INITIAL_TASKS;
  constructor(public payload: Array<TaskModel>) {}
}

export class addNewTask implements Action {
  readonly type = ADD_NEW_TASK;
  constructor(public payload: TaskModel) {}
}

export class deleteTask implements Action {
  readonly type = DELATE_TASK;
  constructor(public payload: string) {}
}

export class changeStatus implements Action {
  readonly type = CHANGE_STATUS;
  constructor(public payload: { id: number; status: string }) {}
}

export class removeLabel implements Action {
  readonly type = REMOVE_LABEL;
  constructor(public payload: { id; label }) {}
}

export class editTask implements Action {
  readonly type = EDIT_TASK;
  constructor(public payload: { id: string; task: NewTask }) {}
}

export class editLabels implements Action {
  readonly type = EDIT_LABELS;
  constructor(public payload: TaskModel) {}
}

export class addComment implements Action {
  readonly type = ADD_COMMENT;
  constructor(public payload: CommentModel) {}
}

export class removeComment implements Action {
  readonly type = REMOVE_COMMENT;
  constructor(public payload: { id: string; comment: string }) {}
}

export class resetStore implements Action {
  readonly type = RESET_STORE;
}
export class toggleComments implements Action {
  readonly type = OPENED;
  constructor(public payload: { id: string; opened: boolean }) {

  }
}

export type TasksActions =
  | addNewTask
  | removeLabel
  | loadInitialTasks
  | loadTasks
  | editTask
  | editLabels
  | changeStatus
  | deleteTask
  | addComment
  | removeComment
  | resetStore
  | toggleComments

