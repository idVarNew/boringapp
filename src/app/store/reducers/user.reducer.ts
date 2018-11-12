import * as AppActions from '../actions';
import { UserModel } from '../../shared/models/task.model';
import { Store } from '../app.state';

export function User(state: UserModel = Store.user, action: AppActions.ActionsUser): UserModel {
  switch (action.type) {
    case AppActions.LOGIN_STATUS:
      return {
        ...state,
        logIn: action.payload
      };
    default:
      return state;
  }
}
