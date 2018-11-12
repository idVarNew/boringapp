import * as AppActions from '../actions';
import { FiltersModel } from '../../shared/models/task.model';
import { Store, initialFilters } from '../app.state';

export function Filters(state: FiltersModel = Store.filters, action: AppActions.ActionsFilter): FiltersModel {
  switch (action.type) {
    case AppActions.BY_LABEL:
      return {
        ...state,
        byLabel: action.payload
      };
    case AppActions.BY_DATE:
      return {
        ...state,
        byDueDate: action.payload
      };
      case AppActions.BY_SEARCH_QUERY:
      return {
        ...state,
        bySearchQuery: action.payload
      };   
    case AppActions.RESET_FILTERS:
      return initialFilters;
    default:
      return state;
  }
}
