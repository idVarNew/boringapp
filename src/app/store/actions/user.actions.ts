import { Action } from '@ngrx/store';

export const LOGIN_STATUS = '[user] BY_LABEL';

export class changeLoginStatus implements Action {
  readonly type = LOGIN_STATUS;
  constructor(public payload: boolean) {}
}


export type ActionsUser = changeLoginStatus
