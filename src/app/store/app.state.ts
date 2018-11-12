import { FiltersModel, TaskModel, StoreModel } from '../shared/models/task.model';

export const initialFilters: FiltersModel = {
  byLabel: 'all',
  byDueDate: undefined,
  bySearchQuery: ''
};

export const initialUser = {
  logIn: false
};

export const initialTasks: Array<TaskModel> = [];

export const Store: StoreModel = {
  filters: initialFilters,
  tasks: initialTasks,
  user: initialUser
};
