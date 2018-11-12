import { Action } from '@ngrx/store';

export const BY_LABEL = '[filters] BY_LABEL';
export const BY_DATE = '[filters] BY DATE';
export const RESET_FILTERS = '[filters] RESET_FILTERS';
export const BY_SEARCH_QUERY = '[filters] BY_SEARCH_QUERY';

export class filterByLabel implements Action {
  readonly type = BY_LABEL;
  constructor(public payload: string) {}
}

export class sortByDueDate implements Action {
  readonly type = BY_DATE;
  constructor(public payload: string) {}
}

export class resetFilters implements Action {
  readonly type = RESET_FILTERS;
}

export class searchTask implements Action {
  readonly type = BY_SEARCH_QUERY;
  constructor(public payload) {}
}

export type ActionsFilter = filterByLabel | sortByDueDate | resetFilters | searchTask;
