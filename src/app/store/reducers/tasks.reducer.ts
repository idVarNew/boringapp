import * as AppActions from '../actions';
import { Store } from '../app.state';
import { TaskModel, CommentModel } from '../../shared/models/task.model';

export function Tasks(state = Store.tasks, action: AppActions.TasksActions) {
  switch (action.type) {
    case AppActions.LOAD_INITIAL_TASKS:
      return [].concat(action.payload);

    case AppActions.ADD_NEW_TASK:
      return [
        {
          id: action.payload.id,
          description: action.payload.description,
          status: 'todo',
          dueDate: action.payload.dueDate,
          importance: action.payload.importance,
          publishDate: action.payload.publishDate,
          labels: action.payload.labels,
          color: action.payload.color,
          comments: action.payload.comments,
          opened: false
        },
        ...state
      ];

    case AppActions.EDIT_TASK:
      return state.map((task: TaskModel) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            description: action.payload.task.description,
            status: action.payload.task.status,
            dueDate: action.payload.task.dueDate,
            importance: action.payload.task.importance,
            labels: action.payload.task.labels,
            color: action.payload.task.color,
            comments: action.payload.task.comments
          };
        } else {
          return task;
        }
      });
    case AppActions.REMOVE_LABEL:
      return state.map((task: TaskModel) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            labels: task.labels.filter((label: string) => {
              return label !== action.payload.label;
            })
          };
        } else {
          return task;
        }
      });
    case AppActions.ADD_COMMENT:
      return state.map((task: TaskModel) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            comments: [
              ...task.comments,
              {
                comment: action.payload.comment,
                publishDate: action.payload.publishDate
              }
            ]
          };
        } else {
          return task;
        }
      });
    case AppActions.REMOVE_COMMENT:
      return state.map((task: TaskModel) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            comments: task.comments.filter((comment: string) => {
              return comment !== action.payload.comment;
            })
          };
        } else {
          return task;
        }
      });

    case AppActions.CHANGE_STATUS:
      return state.map((task: TaskModel) => {
        if (task.id + '' === action.payload.id + '') {
          return {
            ...task,
            status: action.payload.status
          };
        } else {
          return task;
        }
      });
    case AppActions.DELATE_TASK:
      return state.filter((task: TaskModel) => {
        return task.id !== action.payload;
      });
    case AppActions.OPENED:
      return state.map((task: TaskModel) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            opened: action.payload.opened
          };
        } else {
          return task;
        }
      });
    case AppActions.RESET_STORE:
      return [];
    default:
      return state;
  }
}
